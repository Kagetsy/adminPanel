import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from "../base/buttonBase.jsx";
import { UserContext } from '../user/userProvider';

export default function Menu(){  
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  function openProfile(){
    navigate("/");
  }
  function openEditProfile(){
    navigate("/edit");
  }
  function openAdministration(){}
  function returnUser(){
    setUser({...user, id: "", value: ""});
    navigate("/");
  }
  return (
    <>
      <div className="tab">
        <Button onClick={openProfile} className={"menu"} id={"profile"} defaultValue={"Мой профиль"} />
        <Button onClick={openEditProfile} className={"menu"} id={"editProfile"} defaultValue={"Редактировать профиль"} />
        <Button onClick={openAdministration} className={"menu"} id={"administration"} defaultValue={"Администрирование"} />
        <Button styleBlock={"returnBlock"} onClick={returnUser} className={"return"} id={"return"} defaultValue={"Выход"} />
      </div>
    </>)
}