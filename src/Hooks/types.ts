export interface ISlider{
    _id:string;
    caption:string;
    order: number;
}

export interface IAbout{
    _id:string;
    header:string;
    content:string;
    order: number;
}

export interface IBlogPost{
    _id:string;
    blog_cover_img: string;
    blog_post_img: string;
    post_content: string;
    content_body: string;
    header:string    ;
    createdAt:string;
}

export interface IGallery{
    _id:string;
    height_ration:number;
    width_ration:number;
    order: number;
}


export interface ITestimonial{
    _id:string;
    testimonial_img: string;
    content: string;
    author: string;
    about_author:  string;
    order: string;
}

export interface ICourse{
    _id:string;
    course_type:string;
    plane_name:string;
    price:number
    desc:string;
    bullet1:string;
    bullet2:string;
    bullet3:string;
    bullet4:string;
    bullet5:string;
}