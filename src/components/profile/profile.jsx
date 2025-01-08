import { useState, useContext } from 'react';
import { InfoNames } from "../../ts/constants/infoNames";
import { UserContext } from '../user/userProvider';
import Info from "../base/infoBase";
import CheckBox from '../base/checkBoxBase';

export default function Profile(){
    const { user } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [canCreateRole, setCanCreateRole] = useState(false);
    
    async function getUserInfo(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json;charset=utf-8');
        headers.append('X-Auth-User', `${user.id}`);
        headers.append('X-Auth-Pass', `${user.value}`);
        let response = await fetch(`http://localhost:5010/api/User/GetUser?userValue=${user.value}`, {headers: headers});
        let userInfo = await response.json();
        if (userInfo != null){
            setLogin(userInfo.Login);
            setEmail(userInfo.Email);
            setCanCreateRole(userInfo.CanCreateNewRole);
        }
    }

    getUserInfo();

    return (
    <form id="form_profile">
        <Info className={"formChild"} nameBlock={InfoNames.Login} idLabel={"login"} content={login}/>
        <Info className={"formChild"} nameBlock={InfoNames.Email} idLabel={"email"} content={email}/>
        <CheckBox className={"formChild"} checkBoxInfo={"Можно добавить роль?"} idInput={"canCreateRole"} checked={canCreateRole} disabled={"True"} />
    </form>);
}