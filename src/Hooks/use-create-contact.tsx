import { useEffect, useState } from "react";
import { createCreateContactApi } from "../Axios/create-contact-api";


export const useCreateContact = (data:any) => {

    const [res, setRes] = useState();
    useEffect(() => {
        createCreateContactApi(data)
        .then(res => {
            setRes(
                res.data
            );
        })
        .catch();
    }, []);
    return {
        res
    };
};
