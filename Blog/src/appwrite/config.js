import conf from "../conf/conf";
import { Client , ID , Storage , Databases , Query } from "appwrite";

export class Service{
   client = new Client;
   databases;
   bucket;
   constructor(){
     this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId)

      this.databases = new Databases(this.client)
      this.bucket = new Storage(this.bucket)
   }

   async createPost({title , slug , content , featureImage , status, userId}){
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteColletionId,
            slug,
            {
               title,
               content,
               featureImage,
               status,
               userId
            }
        )
    } catch (error) {
        console.log("Error while creating POst" , error)
    }
   }
   
   async updatePost(slug , {title , content , featureImage , status}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteColletionId,
            slug,
            {
                title , 
                content,
                featureImage,
                status
            }
        )
    } catch (error) {
        console.log("Error while updating Post" , error)
    }
   }

   async deletePost(slug ){
     try {
        await this.databases.deleteDocument(
            conf.appwriteURL,
            conf.appwriteProjectId,
            slug
        )
        return true
     } catch (error) {
        console.log("Error While Deleting post" , error)
     }
   }
  
    async getPost(slug){
        try {
            await this.databases.getDocument(
                conf.appwriteURL,
                conf.appwriteProjectId,
                slug
            )
        } catch (error) {
            console.log("Error while getting post", error)
            return false
        }
    }

    async getPosts(quires = [Query.equal("status" , "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteURL,
                conf.appwriteProjectId,
                quires
            )
        } catch (error) {
            console.log("Error in Getting Posts " , error)
            return false
        }
    }

    // File upload service

    async updateFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Error while uploading File" , error)
        }
    }


    async deleteFile(fileId){
        try {

            return await this.bucket.updateFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Error occur while deleteing the file " , error)

            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();

export default service