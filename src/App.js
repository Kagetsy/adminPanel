import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginLayout from './components/auth/loginLayout.jsx';
import ForgetLayout from "./components/auth/forgetLayout.jsx";
import RegistrationLayout from "./components/auth/registrationLayout.jsx";
import BaseLayout from './components/base/baseLayout.jsx';
import UserProvider from './components/user/userProvider.jsx';
import EditProfileLayout from './components/profile/editProfileLayout.jsx';
import AdministrationLayout from './components/profile/administrationLayout.jsx';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import ProfileLayout from './components/profile/profileLayout.jsx';

const theme = createTheme();

export default function App() {
  const themeCurrent = useTheme(theme);
  return (
    <ThemeProvider theme={themeCurrent}>
    <UserProvider>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<ProfileLayout />} />
          <Route path="/edit" element={<EditProfileLayout />} />
          <Route path="/administration" element={<AdministrationLayout />} />
        </Route>       
        <Route path='/login' element={<LoginLayout />} />
        <Route path="/forget" element={<ForgetLayout />} />
        <Route path="/registration" element={<RegistrationLayout />} />
      </Routes>
    </UserProvider>
    </ThemeProvider>
  );
}