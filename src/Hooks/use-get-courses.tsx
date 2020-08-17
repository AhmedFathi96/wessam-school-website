import { useEffect, useState } from "react";
import { getCoursesApi } from "../Axios/get-courses-api";
import { ICourse } from "./types";


export const useGetCourses = () => {

    const [courses, setCourses] = useState<ICourse[]>([]);
    useEffect(() => {
        getCoursesApi()
        .then(data => {
            setCourses(
            data.data.data
            );
        })
        .catch();
    }, []);
    return {
        courses
    };
};
