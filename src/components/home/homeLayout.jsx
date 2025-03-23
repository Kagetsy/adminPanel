import "../../css/homeForm.css";
import React from 'react';
import Title from "../base/titleBase.jsx";
import ProfileLayout from "../profile/profileLayout.jsx";

export default function HomeLayout(){
  return (
    <>
      <Title title="Панель администрирования" />
      <ProfileLayout />
    </>)
}