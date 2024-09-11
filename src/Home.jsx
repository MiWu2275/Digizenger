import { Navigation, Pagination , Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "../images/carousel 1.png"
import slide2 from "../images/carousel 2.png"
import slide3 from "../images/carousel 3.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PiLockKeyFill } from "react-icons/pi";
import { useState, useEffect } from 'react';
import { MdEmail } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from './Feature/Hook';
import { selectAuth } from './Feature/AuthSlice';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import { useRegisterUserMutation } from './Service/Auth';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialState ={
    name : "",
    email : "",
    password: "",
    confirm : "",
}

function Home(){

    const [formValue, setFormValue] = useState(initialState);
    const { name, email, password, confirm} = formValue;
    const {token} = useAppSelector(selectAuth);
    const [registerUser, { data: registerData, isSuccess: isRegisterSuccess, isError: isRegisterError, error: registerError }] = useRegisterUserMutation();
    // console.log(Name)
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const urlName = params.get('name');
        const urlEmail = params.get('email');
        const urlPassword = params.get('password');
        const urlConfirm = params.get('confirm');

        // Set the form values from the query parameters, if they exist
        setFormValue({
            name: urlName || "",
            email: urlEmail || "",
            password: urlPassword || "",
            confirm: urlConfirm || ""
        });
    }, [location.search]); // Run this effect when the URL search changes

    // Handle input changes
    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent page reload
        
        // Debugging: Log form values
        console.log("Form submitted:", { name, email, password, confirm });

        // Ensure form fields are filled
        if (!name || !email || !password || !confirm) {
            toast.error("Please fill in all the fields.");
            return;
        }

        // Check if passwords match
        if (password !== confirm) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            await registerUser({ name, email, password, password_confirmation: confirm });
        } catch (error) {
            toast.error("An error occurred during registration.");
        }
    };

    useEffect(() => {
        if (isRegisterSuccess) {
            toast.success("User registered successfully.");
            navigate("/login");
        }

        if (isRegisterError && registerError) {
            toast.error("Registration failed. Please try again.");
        }
    }, [isRegisterSuccess, isRegisterError, navigate, registerError]);

    return(
        <section>
            <div className="grid grid-cols-[60%_30%] gap-x-[50px]">
                <div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        className='ml-[35px] mt-[-55px]'
                    >
                        <SwiperSlide><img src={slide1} className='w-[45rem] h-[30rem]'></img></SwiperSlide>
                        <SwiperSlide><img src={slide2} className='w-[45rem] h-[30rem]'></img></SwiperSlide>
                        <SwiperSlide><img src={slide3} className='w-[45rem] h-[30rem]'></img></SwiperSlide>
                    </Swiper>
                    <button className='bg-[#D00029] rounded-[10px] mt-[30px] p-[10px] w-[350px] font-semibold h-[45px] text-lg text-white justify-self-center'>Start With Free Lesson</button>
                </div>
                <div className='relative'>
                    <form className="grid grid-row-4 gap-y-[20px] px-[20px] relative " onSubmit={handleRegister}>
                        <i className='text-[#D00029] absolute left-[40px] bottom-[32.3rem] icon'><MdPeopleAlt size={30}/></i>
                        <input type="text" name="name" value={name} onChange={handleChange} className="h-[55px]  w-[420px] rounded-[10px] outline-none "></input>
                        <i className='text-[#D00029] absolute left-[40px] bottom-[27.5rem] icon'><MdEmail size={30}/></i>
                        <input type="email" name="email" value={email} onChange={handleChange} className="h-[55px] rounded-[10px] outline-none"></input>
                        <i className='text-[#D00029] absolute bottom-[23rem] left-[40px] icon'><PiLockKeyFill size={30} /></i>
                        <input type="password" name="password" value={password} onChange={handleChange} className="h-[55px] rounded-[10px] outline-none "></input>
                        <i className='text-[#D00029] absolute bottom-[18rem] left-[40px] icon'><PiLockKeyFill size={30} /></i>
                        <input type="password" name="confirm" value={confirm} onChange={handleChange} className="h-[55px] rounded-[10px] outline-none"></input>
                        <div>
                            <span className='text-white text-sm ml-[6rem]'>Already Register?</span>
                            <Link to="login"><button className="bg-transparent text-white text-sm ml-[10px] mr-[20px]">Login</button></Link>
                            <button type="submit" className="bg-[#D00029] rounded-[10px] p-[10px] w-[140px] h-[43px] justify-self-end">Sign In</button>
                        </div>
                        <div className="text-white mt-[10px] mb-[10px] justify-self-center relative or">OR</div>
                        <button className="h-[55px]  w-[420px] rounded-[10px] font-semibold bg-white justify-self-center">Continue With Google</button>
                        <button className="h-[55px]  w-[420px] rounded-[10px] font-semibold bg-white justify-self-center">Continue With Facebook</button>
                        
                    </form>
                </div>
            </div>
            <div className='w-[100%] h-[2px] bg-gray-400 mt-[5rem]'></div>
            <SecondPage></SecondPage>
            <div className='w-[100%] h-[2px] bg-gray-400 mt-[5rem]'></div>
            <ThirdPage></ThirdPage>
            <div className='testimonials text-white relative text-2xl font-semibold'>STUDENT TESTIMONIALS</div>
            
        </section>
    )
}

export default Home;