import { Client, Account, ID } from "appwrite";
import config from "../config/config";  

export class AuthService {
    client = new Client();
    account ;
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                // call the login method here
                return this.login({email, password});
            }else {
                throw new Error("Error creating account");
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    async login({email, password}) {
        try {
            return await this.account.createSession(email, password);
             
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.error("Appwrite service :: logout :: error",error);
        }
    }

    async getCurrentUser() {
        try{
            return await this.account.get();
        }catch(error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }

}

const authService = new AuthService();
export default authService