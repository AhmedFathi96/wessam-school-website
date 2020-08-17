import { useEffect, useState } from "react";
import { getBlogPostsApi } from "../Axios/get-posts-api";
import { IBlogPost } from "./types";


export const useGetBlogPosts = () => {

    const [posts, setBlogPosts] = useState<IBlogPost[]>([]);
    useEffect(() => {
        getBlogPostsApi()
        .then(data => {
            setBlogPosts(
            data.data.data
            );
        })
        .catch();
    }, []);
    return {
        posts
    };
};
