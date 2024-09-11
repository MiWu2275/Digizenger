import { useGetChaptersByCourseIdQuery } from "./Service/Course";
import { useParams } from "react-router-dom";

function CourseChapter (){
    const {courseId} = useParams();
    const {data, isError, isSuccess, isLoading , error} = useGetChaptersByCourseIdQuery(courseId);

    console.log(data)
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Handle error state properly
    if (isError) {
        return <div>Error: {error?.message || "An error occurred."}</div>;
    }

    return(
        <section>
            <div>
                {data.data.map((data)=>{
                    return(
                        <div>
                            <img src={data.image}/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default CourseChapter;