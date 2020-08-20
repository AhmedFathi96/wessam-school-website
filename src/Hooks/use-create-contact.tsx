import { useEffect, useState } from "react";
import { createCreateContactApi } from "../Axios/create-contact-api";


export const useCreateContact = (data:any) => {

    const [res, setRes] = useState();
    const [contact_is_loading, setLoading] = useState(false);
    useEffect(() => {
        createCreateContactApi(data)
        .then(res => {
            setRes(
                res.data
            );
            setLoading(true);
        })
        .catch(()=>{
            setLoading(false);
        });
    }, []);
    return {
        res,
        contact_is_loading
    };
};
