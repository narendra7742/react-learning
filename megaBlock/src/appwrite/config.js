import conf from "../conf/conf";

import { Client, ID, Databases, Storage, Query } from "appwrite "

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwrite.url)
            .setProject(conf.appwrite.projectId);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            await this.databases.createDocument(conf.appwrite.databaseId, conf.appwrite.collectionId, slug, {
                title, 
                content, 
                featuredImage,
                status,
                userId
            })
        } catch (error) {
            console.error(error);
        }
    }
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            await this.databases.updateDocument(conf.appwrite.databaseId, conf.appwrite.collectionId, slug, {
                title,
                content,
                featuredImage,
                status
            })
        } catch (error) {
            console.error(error);
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwrite.databaseId, conf.appwrite.collectionId, slug)
            return true;
        } catch (error) {
            console.error(error)
            return false;
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwrite.databaseId, conf.appwrite.collectionId, slug)
        } catch (error) {
            console.error(error)
        }
    }

async getPosts(queries = [Query.equal("status", "active")]){
        try {
             return await this.databases.listDocument(conf.appwrite.databaseId, conf.appwrite.collectionId, queries)
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    // File upload service
    async uploadFile(file){
        try {
            return await this.bucket.creatFile(conf.appwrite.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.error(error)
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.appwrite.bucketId,
                fileId
            )
        } catch (error) {
            console.error(error)
            return false;
        }
    }

    async getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwrite.bucketId, fileId)
    }
}

const service = new Service();
export default service