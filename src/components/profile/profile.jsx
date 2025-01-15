import { useState, useContext } from 'react';
import { InfoNames } from "../../ts/constants/infoNames";
import { UserContext } from '../user/userProvider';
import Info from "../base/infoBase";
import CheckBox from '../base/checkBoxWithLabelBase';

export default function Profile(){
    const { user } = useContext(UserContext);
    const [ email ] = useState(user.email);
    const [ login ] = useState(user.login);
    const [ canCreateRole ] = useState(user.canCreateRole);
    
    return (
    <form id="form_profile">
        <Info className={"formChild"} nameBlock={InfoNames.Login} idLabel={"login"} content={login}/>
        <Info className={"formChild"} nameBlock={InfoNames.Email} idLabel={"email"} content={email}/>
        <CheckBox className={"formChild"} checkBoxInfo={"Можно добавить роль?"} idInput={"canCreateRole"} checked={canCreateRole} disabled={"True"} />
    </form>);
}