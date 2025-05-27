import conf from "../conf/conf";
import {Client,Account,ID} from 'appwrite'

export class Authservice{
    client = new Client()
    account

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)

    }

    async createAccount({email,password,name}){
        const userAccount = this.account.create(ID.unique(),email,password,name)
        try{
            if(userAccount){
                return this.login({email,password})
            }else{
                return userAccount
            }
        } catch(error){
            throw error
        }
    }

    async login({email,password}){
        try{
            return await this.createEmailSession(email,password)
        }catch(error){
            throw error
        }
    }
    async getCurrenUser(){
        try{
            return await this.account.get()
        }catch(error){
            console.log("Appwrite serive :: getCurrentUser :: error", error)
        }
        return null
    }
    async logout(){
        try{
            await this.account.deleteSession()
        }catch(error){
            console.log("Appwrite serive :: logout :: error", error)
        }
    }
}

const authservice = new Authservice()
export default authservice