import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from "./components/login/loginForm.jsx";
import ForgetForm from "./components/forget/forgetForm.jsx";
import RegistrationForm from "./components/registration/registrationForm.jsx";
import HomePage from './components/home/homePage.jsx';
import BaseLayout from './components/base/baseLayout.jsx';
import UserProvider from './components/user/userProvider.jsx';
import EditProfile from './components/profile/editProfile.jsx';

export default function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/edit" element={<EditProfile />} />
        </Route>       
        <Route path='/login' element={<LoginForm />} />
        <Route path="/forget" element={<ForgetForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </UserProvider>
  );
}