import "../../css/startForms.css";
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../base/InputWithErrorMessageBase.jsx"
import Button from "../base/buttonBase.jsx";
import Error from "../base/errorInfo.jsx";
import { FormNames } from "../../ts/constants/formNames.ts";
import { InputNames } from '../../ts/constants/inputNames.ts';
import { UserContext } from '../user/userProvider.jsx';
import Title from "../base/titleBase.jsx";
import { Login, GetUser } from "../../api/apiService";

export default function LoginForm() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    function navigateUser(formName){
        navigate(`../${formName}`, { replace: true });
    }

    const [userData, setUserData] = useState({
        value : "",
        error : ""
    });

    const [passwordData, setPasswordData] = useState({
        value : "",
        error : ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === InputNames.UserName){
            setUserData({...userData, value: value})
        }
        else if (id === InputNames.Password){
            setPasswordData({...passwordData, value: value})
        }
    };
    
    const validateForm = () => {
        let result = true;
        if (!userData.value.trim()) {
            setUserData({...userData, error: "Введите имя пользователя"})
        }
        else {
            setUserData({...userData, error: ""})
        }

        if (!passwordData.value) {
            setPasswordData({...passwordData, error: "Введите пароль"})
            result = false;
        }
        else {
            setPasswordData({...passwordData, error: ""})
        }
        return result;
    };

    async function loginUser(){
        var resultValidation = validateForm();
        if (!resultValidation)
            return;
        
        await Login(userData.value, passwordData.value, user, setUser);
        if (user.id !== "" && user.value !== ""){
            await GetUser(user, setUser);
            navigate("/");
        }
    }
    
    return (
        <form id="form_login">
            <Title title="Авторизация"></Title>
            <div>Авторизация</div>
            <Input type={"username"} id={InputNames.UserName} placeholder={"username"} handleChange={handleChange} info={userData}/>
            <Input type={"password"} id={InputNames.Password} placeholder={"password"} handleChange={handleChange} info={passwordData}/>
            <Button onClick={() => loginUser()} className={"btnSubmit"} id={"submit"} defaultValue={"Войти"}/>
            <Button onClick={() => navigateUser(FormNames.Forget)} className={"btnForget"} id={"forget"} defaultValue={"Не помню пароль"}/>
            <Button onClick={() => navigateUser(FormNames.Registration)} className={"btnRegistration"} id={"registration"} defaultValue={"Зарегистрироваться"}/>
            <Error />
        </form>
    );
}