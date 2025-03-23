import "../../css/startForms.css";
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../base/textFieldErrorMessageBase.jsx"
import Button from "../base/buttonAuthBase.jsx";
import { FormNames } from "../../ts/constants/formNames.ts";
import { InputNames } from '../../ts/constants/inputNames.ts';
import { UserContext } from '../user/userProvider.jsx';
import Title from "../base/titleBase.jsx";
import { Login, GetUser } from "../../api/apiService";
import { withStyles } from '@mui/styles';
import { green } from "@mui/material/colors";
import Form from "../base/formControlAuthBase";

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
        
        let result = await Login(userData.value, passwordData.value, user);
        if (result !== null){
            setUser(() => ({...user, id: result.id, value: result.value}));
        }
        if (user.id !== "" && user.value !== ""){
            let userResult = await GetUser(user);
            if (userResult !== null){
                setUser(() => ({...user, userId: userResult.Id, login: userResult.Login, canCreateRole: userResult.CanCreateNewRole, email: userResult.Email}));
            }
            navigate("/");
        }
    }

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