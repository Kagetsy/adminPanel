import "../../css/homeForm.css";
import React from 'react';
import Title from "../base/titleBase.jsx";
import Profile from "../profile/profile.jsx";

export default function HomePage(){
  return (
    <>
      <Title title="Панель администрирования" />
      <Profile />
    </>)
}