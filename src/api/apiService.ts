import axios, { Method } from "axios";
import { UserInfo } from "../ts/entities/userInfo";
const client = axios.create({
  baseURL: "http://localhost:5010/api"
});

export async function Login(login : string, password : string, user : UserInfo, setUser : Function){
  await client.get(`/Home?login=${login}&password=${password}`)
  .then((response) => {
     if (response.data !== null)
      setUser({...user, id: response.data.id, value: response.data.value});
    })
  .catch(function (error) {
      console.log(error);
    });
}

export async function GetUser(user: UserInfo, setUser : Function) {
  let headers = {'Content-Type': 'application/json;charset=utf-8',
    'X-Auth-User': `${user.id}`,
    'X-Auth-Pass': `${user.value}`
  };
  await client.get(`/User/GetUser?userValue=${user.value}`, {headers})
  .then((response) => {
    if (response.data !== null){
     setUser({...user, login: response.data.Login, canCreateRole: response.data.CanCreateNewRole, email: response.data.Email});
    }
  })
  .catch(function (error) {
      console.log(error);
    });
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
      Id : user.id
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
  console.log("fgdfgasd");
  return result;
}