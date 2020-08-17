import { useEffect, useState } from "react";
import { getSlidersApi } from "../Axios/get-sliders-api";
import { ISlider } from "./types";


export const useGetSliders = () => {

    const [sliders, setSliders] = useState<ISlider[]>([]);
    useEffect(() => {
        getSlidersApi()
        .then(data => {
            setSliders(
            data.data.data
            );
        })
        .catch();
    }, []);
    return {
        sliders
    };
};
