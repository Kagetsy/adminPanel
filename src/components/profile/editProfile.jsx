import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../user/userProvider';
import Button from '../base/buttonBase';

export default function EditProfile(){
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [canCreateRole, setCanCreateRole] = useState(false);
    const [email, setEmail] = useState("");
    async function update(){
        let headersList = new Headers();
        headersList.append('Content-Type', 'application/json;charset=utf-8');
        headersList.append('X-Auth-User', `${user.id}`);
        headersList.append('X-Auth-Pass', `${user.value}`);
        let userInfo = {
            canCreateRole,
            email
        };
        let response = await fetch(`http://localhost:5105/User/Update`, {
            method: 'POST',
            headers: headersList,
            body: JSON.stringify(userInfo)});        
      let result = await response.ok;
      if (result)
        navigate("/");
    }

    function cancel(){
        
    }

    return (
        <div className="edit">
            <form id="form_edit">
            <div>
                <p class="formChild">Email</p>
                <input type="email" id="email" placeholder="email" />
            </div>                
            <div>
                <p class="formChild">Можно добавить роль?</p>
                <input class="formChild" id="canCreateRole" type="checkbox" checked="True"/>
            </div>
            <div className="editButtons">
                <Button onClick={update} className={"editButton"} id={"edit"} defaultValue={"Обновить"} />
                <Button onClick={cancel} className={"cancelButton"} id={"cancel"} defaultValue={"Отменить"} />
            </div>
            </form>
        </div>
    );
}