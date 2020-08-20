import { useEffect, useState } from "react";
import { getGalleryApi } from "../Axios/get-gallery-api";
import { IGallery } from "./types";


export const useGetGallery = () => {

    const [gallery, setGallery] = useState<IGallery[]>([]);
    const [gallery_is_loading, setLoading] = useState(false);

    useEffect(() => {
        getGalleryApi()
        .then(data => {
            setGallery(
            data.data.data
            );
            setLoading(true)
        })
        .catch(()=>{
            setLoading(false)
        });
    }, []);
    return {
        gallery,
        gallery_is_loading
    };
};
