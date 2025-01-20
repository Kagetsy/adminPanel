export class UserInfo{
    id: string;
    userId: string;
    value : string;
    login : string;
    canCreateRole : boolean;
    email : string;
    constructor(){
        this.id = "";
        this.userId = "";
        this.value = "";
        this.login = "";
        this.canCreateRole = false;
        this.email = "";
    }
}