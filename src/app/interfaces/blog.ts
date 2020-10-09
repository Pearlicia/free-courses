import { User } from './user';


export interface Blog {
    id?: string;
    createdAt: number;
    author?: string;
    subject: string;
    coupon: string;
    url: string;
    summary: string;
    imageUrl: any;
    file: any;
    body: string;
    location?: string;
    comments?: [{
        author: string;
        message: string;
        timeStamp: number;
        likes: number;
    }]; 


}