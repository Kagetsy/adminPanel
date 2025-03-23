import { useState, useContext } from 'react';
import { InfoNames } from "../../ts/constants/infoNames";
import { UserContext } from '../user/userProvider';
import Info from "../base/infoBase";
import CheckBox from '../base/checkBoxWithLabelBase';
import Form from '../formControls/formControlHomeBase';

export default function ProfileLayout(){
    const { user } = useContext(UserContext);
    const [ email ] = useState(user.email);
    const [ login ] = useState(user.login);
    const [ canCreateRole ] = useState(user.canCreateRole);
    
    return (
        <Form>
            <Info nameBlock={InfoNames.Login} content={login}/>
            <Info nameBlock={InfoNames.Email} content={email}/>
            <CheckBox checkBoxInfo={"Можно добавить роль?"} checked={canCreateRole} disabled={true} />
        </Form>
    );
}