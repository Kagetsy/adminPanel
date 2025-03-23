import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from '../base/buttonAuthBase';
import ButtonRef from '../base/buttonRef';

export default function CreateUserPopup() {
    return (
        <Popup trigger={
                <ButtonRef className={"createRoleButton"} id={"createRole"} defaultValue={"Добавить роль"} />
        } modal nested>
        {
            close => (
                <div className="modal">
                    <Button onClick={() => close()} className={"cancelCreateRoleButton"} id={"cancelCreateRole"} defaultValue={"Отменить создание роли"} />
                </div>
        )}
        </Popup>
    );
    
};