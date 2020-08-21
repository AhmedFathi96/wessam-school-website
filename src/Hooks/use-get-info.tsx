import { useEffect, useState } from "react";
import { getInfoApi } from "../Axios/get-info-api";
import { IInfo } from "./types";


export const useGetInfo = () => {

    const [Info, setInfo] = useState<IInfo>({_id:'',address:'',company_name:'',email:'',facebook_url:'',instagram_url:'',map_url:'',phone:'',twitter_url:'',whatsapp_number:''});
    const [Info_is_loading, setLoading] = useState(false);

    useEffect(() => {
        getInfoApi()
        .then(data => {
            // console.log('Data ====>' , data.data.data[0])
            setInfo(
                data.data.data[0]
            );
            setLoading(true);
        })
        .catch((err)=>{
            setLoading(false);
        });
    }, []);
    return {
        Info,
        Info_is_loading
    };
};
