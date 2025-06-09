export class UserResult{
    userId: string;
    login: string;
    canCreateRole: boolean;
    email: string;
    constructor(){
        this.userId = "";
        this.login = "";
        this.email = "";
        this.canCreateRole = false;
    }
}