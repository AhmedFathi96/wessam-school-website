import { useEffect, useState } from "react";
import { getTestimonialsApi } from "../Axios/get-testimonial-api";
import { ITestimonial } from "./types";


export const useGetTestimonials = () => {

    const [testimonials, setTestimonial] = useState<ITestimonial[]>([]);
    useEffect(() => {
        getTestimonialsApi()
        .then(data => {
            setTestimonial(
            data.data.data
            );
        })
        .catch();
    }, []);
    return {
        testimonials
    };
};
