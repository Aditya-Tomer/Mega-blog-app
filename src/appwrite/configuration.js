import config from 'src/config';
import {Client, ID, Databases, Storage, Query} from 'appwrite';

export class Service {
    client = new Client();
    databases;
    storage;
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{

        }catch(error){
            
        }
    }
}

const service = new Service();
export default service;