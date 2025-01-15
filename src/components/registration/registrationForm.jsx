import "../../css/startForms.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../base/InputWithErrorMessageBase.jsx"
import Error from "../base/errorInfo.jsx"
import { FormNames } from "../../ts/constants/formNames.ts";
import Button from "../base/buttonBase.jsx";
import { InputNames } from '../../ts/constants/inputNames.ts';
import Title from "../base/titleBase.jsx";

export default function RegistrationForm() {
    const navigate = useNavigate();
    function navigateUser(formName){
        navigate(`../${formName}`, { replace: true });
    };

    const [userData, setUserData] = useState({
        value : "",
        error : ""
    });

    const [emailData, setEmailData] = useState({
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
        else if (id === InputNames.Email){
            setEmailData({...emailData, value: value})
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

        if (!emailData.value.trim()) {
            setEmailData({...emailData, error: "Введите email"})
            result = false;
        } else if (!/\S+@\S+\.\S+/.test(emailData.value)) {
            setEmailData({...emailData, error: "Email содержит ошибку"})
            result = false;
        }
        else {
            setEmailData({...emailData, error: ""})
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

    async function registrationConfirm(){
        var resultValidation = validateForm();
        if (!resultValidation)
            return;
        
        var newUser = {
            Login: userData.value,
            Password: passwordData.value,
            Email: emailData.value
        }

        let response = await fetch(`http://localhost:5010/api/Home/Create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newUser)
        });
        let result = await response;
        if (result.ok)
            navigateUser(FormNames.Login);
        else {
            var error = document.getElementById("errorInfo");
            if (error == null)
                return;

            error.innerHTML = "Ошибка регистрации!";
        }
    }

    return (
        <form id="form_registration">
            <Title title="Регистрация"></Title>
            <div>
                <div>Регистрация</div>
                <Input type={"username"} id={InputNames.UserName} placeholder={"username"} handleChange={handleChange} info={userData}/>
                <Input type={"password"} id={InputNames.Password} placeholder={"password"} handleChange={handleChange} info={passwordData}/>
                <Input type={"email"} id={InputNames.Email} placeholder={"email"} handleChange={handleChange} info={emailData}/>
                <Button onClick={registrationConfirm} className={"btnRegistrationConfirm"} id={"btnRegistrationConfirm"} defaultValue={"Зарегистрироваться"} />
                <Button onClick={() => navigateUser(FormNames.Login)} className={"btnCancel"} id={"cancel"} defaultValue={"Отмена"}/>
                <Error />
            </div>
        </form>
    );
}