import { useEffect, useState } from "react";
import { getSlidersApi } from "../Axios/get-sliders-api";
import { ISlider } from "./types";


export const useGetSliders = () => {

    const [sliders, setSliders] = useState<ISlider[]>([]);
    const [slider_is_loading, setLoading] = useState(false);
    useEffect(() => {
        getSlidersApi()
        .then(data => {
            setSliders(
            data.data.data
            );
            setLoading(true);
        })
        .catch(err => {
            setLoading(false);
        });
    }, []);
    return {
        sliders,
        slider_is_loading
    };
};
