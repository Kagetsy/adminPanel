export class UserInfo{
    id: string;
    value : string;
    login : string;
    canCreateRole : boolean;
    email : string;
    constructor(){
        this.id = "";
        this.value = "";
        this.login = "";
        this.canCreateRole = false;
        this.email = "";
    }
}