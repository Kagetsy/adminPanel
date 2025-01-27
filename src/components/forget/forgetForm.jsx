import "../../css/startForms.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../base/InputWithErrorMessageBase.jsx"
import Error from "../base/errorInfo.jsx";
import Button from "../base/buttonBase.jsx";
import { FormNames } from "../../ts/constants/formNames.ts";
import { InputNames } from '../../ts/constants/inputNames.ts';
import Title from "../base/titleBase.jsx";

export default function ForgetForm() {
    const navigate = useNavigate();
    function navigateUser(formName){
        navigate(`../${formName}`, { replace: true });
    }
    
    const [emailData, setEmailData] = useState({
        value : "",
        error : ""
    });

    const handleChange = (e) => {
        const { value } = e.target;
        setEmailData(emailData.value = value)
    };

    const validateForm = () => {
        let result = true;

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

        return result;
    };

    async function forgetConfirm(){
        var resultValidation = validateForm();
        if (!resultValidation)
            return;
    }

    return (
        <form id="form_forget">
            <Title title="Забыл пароль"></Title>
            <div>
                <div>Восстановление доступа</div>
                <Input type={"email"} id={InputNames.Email} placeholder={"email"} handleChange={handleChange} info={emailData}/>
                <Button onClick={forgetConfirm} className={"btnForgetConfirm"} id={"btnForgetConfirm"} defaultValue={"Отправить"} />
                <Button onClick={() => navigateUser(FormNames.Login)} className={"btnCancel"} id={"cancel"} defaultValue={"Отмена"}/>
                <Error />
            </div>
        </form>
    );
}