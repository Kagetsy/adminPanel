import axios from "axios";
import { UserInfo } from "../ts/entities/userInfo";
import { AuthResult } from "../ts/entities/authResult";
import { UserResult } from "../ts/entities/userResult";
import { updateUserResult, updateAuthResult } from "../components/store/user/slices";
import exportedObject from "../components/store/store";
import { selectUser } from "../components/store/user/selectors";
import { useSelector } from 'react-redux';

const client = axios.create({
  baseURL: "http://localhost:5010/api"
});

export async function Login(login : string, password : string){
  let result = new AuthResult();
  return await client.get(`/Home?login=${login}&password=${password}`)
  .then(async (response) => {
    result.id = response.data.id;
    result.value = response.data.value;
    exportedObject.dispatch(updateAuthResult(result));
    let user = exportedObject.store.getState();
    await GetUser(user);
  })
  .catch(function (error) {
      console.log(error);
    });
}

export async function GetUser(user: UserInfo) {
  let headers = {'Content-Type': 'application/json;charset=utf-8',
    'X-Auth-User': `${user.id}`,
    'X-Auth-Pass': `${user.value}`
  };
  let result = new UserResult();
  await client.get(`/User/GetUser?userValue=${user.value}`, {headers})
  .then((response) => {
    if (response.data !== null){
     result.userId = response.data.Id;
     result.email = response.data.Email;
     result.login = response.data.Login;
     result.canCreateRole = response.data.CanCreateNewRole;
     exportedObject.dispatch(updateUserResult(result));
    }
  })
  .catch(function (error) {
      console.log(error);
    });
  return result;
}

export async function Update(email : string, canCreateRole : boolean, user: UserInfo) {
  let headers = {'Content-Type': 'application/json;charset=utf-8',
    'X-Auth-User': `${user.id}`,
    'X-Auth-Pass': `${user.value}`
  };
  let userInfo = {
      Login : user.login,
      CanCreateNewRole : canCreateRole,
      Email : email,
      Id : user.userId
  };
  let result = false;
  await client.post(`/User/Update`, userInfo, {headers : headers})
  .then((response) => {
    if (response.status === 200){
      result = true;
    }
  })
  .catch(function (error) {
      console.log(error);
    });

  return result;
}

export async function Registration(login : string, password : string, email: string) {
  let headers = {'Content-Type': 'application/json;charset=utf-8'};
  
  let newUser = {
    Login: login,
    Password: password,
    Email: email
  };

  let result = false;
  await client.post(`/Home/Create`, newUser, {headers : headers})
  .then((response) => {
    if (response.status === 200){
      result = true;
    }
  })
  .catch(function (error) {
      console.log(error);
    });

  return result;
}