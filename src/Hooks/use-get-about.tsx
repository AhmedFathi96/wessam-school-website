import { useEffect, useState } from "react";
import { getAboutApi } from "../Axios/get-about-api";
import { IAbout } from "./types";


export const useGetAbout = () => {

    const [about, setAbout] = useState<IAbout[]>([]);
    useEffect(() => {
        getAboutApi()
        .then(data => {
            setAbout(
            data.data.data
            );
        })
        .catch();
    }, []);
    return {
        about
    };
};
