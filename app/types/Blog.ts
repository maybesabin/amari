import { User } from "./User";

export type BlogType = {
    title: string;
    content: string;
    featuredImage: string;
    createdAt: string;
    category: string;
    author: User
}