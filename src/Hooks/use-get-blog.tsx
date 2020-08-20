import { useEffect, useState } from "react";
import { getBlogPostsApi } from "../Axios/get-posts-api";
import { IBlogPost } from "./types";


export const useGetBlogPosts = () => {

    const [BlogPosts, setBlogPosts] = useState<IBlogPost[]>([]);
    const [BlogPosts_is_loading, setLoading] = useState(false);

    useEffect(() => {
        getBlogPostsApi()
        .then(data => {
            setBlogPosts(
            data.data.data
            );
            setLoading(true);
        })
        .catch((err)=>{
            setLoading(false);
        });
    }, []);
    return {
        BlogPosts,
        BlogPosts_is_loading
    };
};
