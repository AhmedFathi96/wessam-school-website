import { useEffect, useState } from "react";
import { getCoursesApi } from "../Axios/get-courses-api";
import { ICourse } from "./types";


export const useGetCourses = () => {

    const [courses, setCourses] = useState<ICourse[]>([]);
    const [courses_is_loading, setLoading] = useState(false);

    useEffect(() => {
        getCoursesApi()
        .then(data => {
            setCourses(
            data.data.data
            );
            setLoading(true)
        })
        .catch(()=>{
            setLoading(false)
        });
    }, []);
    return {
        courses,
        courses_is_loading
    };
};
