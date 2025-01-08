import "../../css/startForms.css";
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../base/inputBase.jsx"
import Button from "../base/buttonBase.jsx";
import Error from "../base/errorInfo.jsx";
import { FormNames } from "../../ts/constants/formNames.ts";
import { InputNames } from '../../ts/constants/inputNames.ts';
import { UserContext } from '../user/userProvider.jsx';
import Title from "../base/titleBase.jsx";

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
        
        let response = await fetch(`http://localhost:5010/api/Home?login=${userData.value}&password=${passwordData.value}`);
        let userInfo = await response.json();
        if (userInfo != null){
            setUser({...user, id: userInfo.id, value: userInfo.value});
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