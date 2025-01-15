import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../user/userProvider';
import { InputNames } from '../../ts/constants/inputNames';
import Button from '../base/buttonBase';
import Input from '../base/inputBase';
import { Update } from '../../api/apiService';

export default function EditProfile(){
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [canCreateRole, setCanCreateRole] = useState(user.canCreateRole);
    const [email, setEmail] = useState(user.email);
    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === InputNames.CanCreateRole){
            setCanCreateRole(value)
        }
        else if (id === InputNames.Email){
            setEmail(value)
        }
    };
    async function update(){
      if (Update(email, canCreateRole, user))
        navigate("/");
    }

    function cancel(){
        setEmail(user.email);
        setCanCreateRole(user.canCreateRole);
    }

    return (
        <div className="edit">
            <form id="form_edit">
            <Input type={"email"} id={InputNames.Email} placeholder={"email"} handleChange={handleChange} info={email}/>
            <Input type={"checkBox"} id={InputNames.CanCreateRole} placeholder={"checkBox"} handleChange={handleChange} info={canCreateRole}/>
            <div className="editButtons">
                <Button onClick={update} className={"editButton"} id={"edit"} defaultValue={"Обновить"} />
                <Button onClick={cancel} className={"cancelButton"} id={"cancel"} defaultValue={"Отменить"} />
            </div>
            </form>
        </div>
    );
}