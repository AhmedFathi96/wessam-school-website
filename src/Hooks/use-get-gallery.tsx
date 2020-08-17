import { useEffect, useState } from "react";
import { getGalleryApi } from "../Axios/get-gallery-api";
import { IGallery } from "./types";


export const useGetGallery = () => {

    const [gallery, setGallery] = useState<IGallery[]>([]);
    useEffect(() => {
        getGalleryApi()
        .then(data => {
            setGallery(
            data.data.data
            );
        })
        .catch();
    }, []);
    return {
        gallery
    };
};
