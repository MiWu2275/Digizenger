import { useGetCoursesQuery } from "./Service/Course";
import { useEffect } from "react";
import { selectCourse , setcourse , showFreecourse , showPremiumcourse } from "./Feature/CourseSlice.ts";
import {useAppDispatch, useAppSelector} from './Feature/Hook.ts';
import { Link } from "react-router-dom";

function Course() {
    const { data: courseArray, isSuccess, isError, isLoading, error } = useGetCoursesQuery();
    const dispatch = useAppDispatch();
    const visibleLessons = useAppSelector(selectCourse);
    console.log(visibleLessons)

    // Handle loading state
    if (isLoading) return <div>Loading...</div>;

    // Handle error state properly
    if (isError) return <div>Error: {error?.message || "An error occurred."}</div>;

    // Dispatch courses to the Redux store when data is successfully fetched
    console.log(courseArray)
    useEffect(() => {
        if (isSuccess && courseArray?.data) {
            dispatch(setcourse(courseArray.data));
            dispatch(showFreecourse());
        }
    }, [dispatch, isSuccess, courseArray]); // Dependencies

    return (
        <section>
            <div className="grid grid-cols-[30%_70%]">
                <div>
                    <ul className="text-white grid justify-items-center">
                        <li
                            className="bg-[#FF0000] w-[300px] h-[50px] pl-[30px] pt-[10px] text-xl text-start font-bold"
                            onClick={() => dispatch(showFreecourse())}
                        >
                            Free Lesson
                        </li>

                        <li
                            className="bg-[#FF0000] w-[300px] h-[50px] pl-[30px] pt-[10px] text-xl text-start font-bold mt-[20px] mb-[20px]"
                            onClick={() => dispatch(showPremiumcourse())}
                        >
                            Premium Course
                        </li>

                        <li className="bg-[#FF0000] w-[300px] h-[50px] pl-[30px] pt-[10px] text-xl text-start font-bold">Level Test</li>
                        <li className="bg-[#FF0000] w-[300px] h-[50px] pl-[30px] pt-[10px] text-xl text-start font-bold mt-[20px] mb-[20px]">Library</li>
                        <li className="bg-[#FF0000] w-[300px] h-[50px] pl-[30px] pt-[10px] text-xl text-start font-bold">Shop</li>
                        <li className="bg-[#FF0000] w-[300px] h-[50px] pl-[30px] pt-[10px] text-xl text-start font-bold mt-[20px]">FAQs</li>
                    </ul>
                </div>

                <div className="grid grid-cols-3">
                    <div className="text-white">
                        {visibleLessons?.map((course) => (
                            <div key={course.id} className="bg-red-100 w-[300px]"> 
                                <img className="w-[300px] h-[200px] text-center" src={course.image}/>
                                {course.is_publish === true ? (<button className="bg-[#D00029] rounded-[10px] mt-[20px] p-[9px] w-[200px] font-semibold h-[44px] text-lg text-white justify-self-center"><Link to={`/course/${course.id}`}>Free Course</Link></button>) : (<button>Premium Course</button>)}
                            </div>
                            
                        ))}
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Course;
