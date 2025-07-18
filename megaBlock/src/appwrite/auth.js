import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwrite.url)
            .setProject(conf.appwrite.projectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
         const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
               // Optionally, you can also create a user document in the database
               this.login({email, password});
            }   
            else {
                 return userAccount;
            }   
        }catch (error) {
            console.error("Error creating account:", error);
            throw error;
        }
    }

    async login({email, password}) {
        try {
            const session = await this.account.createEmailSession(email, password);
            return session;
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    }
    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            console.error("Error fetching current user:", error);
            throw error;
        }
    }
    async logout() {
        try {
            await this.account.deleteSession();
        } catch (error) {
            console.error("Error logging out:", error)  ;
            throw error;
        }
}
}

const authService = new AuthService();

export default authService