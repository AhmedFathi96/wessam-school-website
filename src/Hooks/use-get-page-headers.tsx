import { useEffect, useState } from "react";
import { getPagesHeadersApi } from "../Axios/get-pages-headers-api";
import { IPageHeaders } from "./types";


export const useGetPagesHeaders = () => {

    const [PagesHeaders, setPagesHeaders] = useState<IPageHeaders[]>([]);
    const [PagesHeaders_is_loading, setLoading] = useState(false);

    useEffect(() => {
        getPagesHeadersApi()
        .then(data => {
            setPagesHeaders(
            data.data.data
            );
            setLoading(true);
        })
        .catch((err)=>{
            setLoading(false);
        });
    }, []);
    return {
        PagesHeaders,
        PagesHeaders_is_loading
    };
};
