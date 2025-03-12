import confs from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(confs.appwriteURL) // Your API Endpoint
      .setProject(confs.appwriteProjectId);
      
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name); // Added await
      if (userAccount) {
        // Call another method
        return await this.login({ email, password }); // Added return to chain result and await
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("APPWRITE :: GETCURRENTUSER :: ERROR", error);
    }

    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Error while logout", error);
    }
  }
}

const authService = new AuthService();
export default authService;
