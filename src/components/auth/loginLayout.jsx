import "../../css/startForms.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../base/textFields/textFieldErrorMessage.jsx";
import Button from "../base/buttons/buttonAuth.jsx";
import { FormNames } from "../../ts/constants/formNames";
import { InputNames } from '../../ts/constants/inputNames';
import Title from "../base/titleBase.jsx";
import { Login, GetUser } from "../../api/apiService";
import { withStyles } from '@mui/styles';
import { green } from "@mui/material/colors";
import Form from "../formControls/formControlAuth";
import { useDispatch } from 'react-redux';
import { updateAuthResult, updateUserResult } from "../store/user/slices";
import exportedObject from "../store/store";

const styles = theme => ({
    btnSubmit: {
      "&:hover": {
        backgroundColor : "red",
      },
    },
    btnForget: {
      "&:hover": {
        backgroundColor : "#e7e7e7",
      },
    },
    btnRegistration: {
      "&:hover": {
        backgroundColor : green[400],
      },
    },
  });


function LoginLayout(props){
    const { classes } = props;
    // const dispatch = exportedObject.useDispatch();
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
            setUserData({...userData, value: value});
        }
        else if (id === InputNames.Password){
            setPasswordData({...passwordData, value: value});
        }
    };
    
    const validateForm = () => {
        let result = true;
        if (!userData.value.trim()) {
            setUserData({...userData, error: "Введите имя пользователя"});
        }
        else {
            setUserData({...userData, error: ""});
        }

        if (!passwordData.value) {
            setPasswordData({...passwordData, error: "Введите пароль"});
            result = false;
        }
        else {
            setPasswordData({...passwordData, error: ""});
        }
        return result;
    };
    
    async function loginUser(){
        var resultValidation = validateForm();
        if (!resultValidation)
            return;
        
        await Login(userData.value, passwordData.value);
        const state = exportedObject.store.getState();
        if (state !== null){
            navigate("/");          
        }
    };

    return (
        <Form>
            <Title title="Авторизация"></Title>
            <div>Авторизация</div>
            <Input type={"username"} id={InputNames.UserName} placeholder={"username"} handleChange={handleChange} info={userData}/>
            <Input type={"password"} id={InputNames.Password} placeholder={"password"} handleChange={handleChange} info={passwordData}/>
            <Button onClick={() => loginUser()} className={classes.btnSubmit} id={"submit"} defaultValue={"Войти"}/>
            <Button onClick={() => navigateUser(FormNames.Forget)} className={classes.btnForget} id={"forget"} defaultValue={"Не помню пароль"}/>
            <Button onClick={() => navigateUser(FormNames.Registration)} className={classes.btnRegistration} id={"registration"} defaultValue={"Зарегистрироваться"}/>
        </Form>);
}


export default withStyles(styles)(LoginLayout);