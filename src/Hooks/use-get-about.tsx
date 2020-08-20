import { useEffect, useState } from "react";
import { getAboutApi } from "../Axios/get-about-api";
import { IAbout } from "./types";


export const useGetAbout = () => {

    const [about, setAbout] = useState<IAbout[]>([]);
    const [about_is_loading, setLoading] = useState(false);

    useEffect(() => {
        getAboutApi()
        .then(data => {
            setAbout(
            data.data.data
            );
            setLoading(true);
        })
        .catch((err)=>{
            setLoading(false);
        });
    }, []);
    return {
        about,
        about_is_loading
    };
};
