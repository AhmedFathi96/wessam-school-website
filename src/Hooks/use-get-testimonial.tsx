import { useEffect, useState } from "react";
import { getTestimonialsApi } from "../Axios/get-testimonial-api";
import { ITestimonial } from "./types";


export const useGetTestimonials = () => {

    const [testimonials, setTestimonial] = useState<ITestimonial[]>([]);
    const [testimonial_is_loading, setLoading] = useState(false);

    useEffect(() => {
        getTestimonialsApi()
        .then(data => {
            setTestimonial(
            data.data.data
            );
            setLoading(true)
        })
        .catch(()=>{
            setLoading(false)
        });
    }, []);
    return {
        testimonials,
        testimonial_is_loading
    };
};
