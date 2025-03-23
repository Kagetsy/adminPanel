import "../../css/startForms.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../base/textFields/textFieldErrorMessage.jsx"
import { FormNames } from "../../ts/constants/formNames";
import Button from "../base/buttons/buttonAuth.jsx";
import { InputNames } from '../../ts/constants/inputNames';
import Title from "../base/titleBase.jsx";
import Form from "../formControls/formControlAuth";
import { Registration } from "../../api/apiService";

export default function RegistrationLayout() {
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

        let result = await Registration(userData.value, passwordData.value, emailData.value);
        if (result !== null){
            navigateUser(FormNames.Login);
        }
    }

    return (
        <Form>
            <Title title="Регистрация"></Title>
            <div>Регистрация</div>
            <Input type={"username"} id={InputNames.UserName} placeholder={"username"} handleChange={handleChange} info={userData}/>
            <Input type={"password"} id={InputNames.Password} placeholder={"password"} handleChange={handleChange} info={passwordData}/>
            <Input type={"email"} id={InputNames.Email} placeholder={"email"} handleChange={handleChange} info={emailData}/>
            <Button onClick={registrationConfirm} className={"btnRegistrationConfirm"} id={"btnRegistrationConfirm"} defaultValue={"Зарегистрироваться"} />
            <Button onClick={() => navigateUser(FormNames.Login)} className={"btnCancel"} id={"cancel"} defaultValue={"Отмена"}/>
        </Form>
    );
}