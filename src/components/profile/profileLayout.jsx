import { useState, useContext } from 'react';
import { InfoNames } from "../../ts/constants/infoNames";
import { UserContext } from '../user/userProvider';
import Info from "../base/infoBase";
import CheckBox from '../base/checkBoxWithLabelBase';
import Form from '../formControls/formControlProfile';
import Title from "../base/titleBase.jsx";

export default function ProfileLayout(){
    const currentUser = useContext(UserContext);
    const [ email ] = useState(currentUser.state.email);
    const [ login ] = useState(currentUser.state.login);
    const [ canCreateRole ] = useState(currentUser.state.canCreateRole);
    
    return (
        <>
            <Title title="Мой профиль" />
            <Form>
                <Info nameBlock={InfoNames.Login} content={login}/>
                <Info nameBlock={InfoNames.Email} content={email}/>
                <CheckBox checkBoxInfo={"Можно добавить роль?"} checked={canCreateRole} disabled={true} />
            </Form>
        </>
    );
}