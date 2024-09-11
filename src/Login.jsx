import { PiLockKeyFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import { useLoginUserMutation } from "./Service/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from "./Feature/Hook";
import { setUser } from "./Feature/AuthSlice";

const initialState = {
    email: "",
    password: "",
}

function Login() {
    const [formValue, setFormValue] = useState(initialState);
    const { email, password } = formValue;
    const [loginUser, { data: loginData, isSuccess: isLoginSuccess, isError: isLoginError, error: loginError }] = useLoginUserMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleChange = (e) => { 
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (email && password) {
            try {
                await loginUser({ email, password }).unwrap().then((response) =>
                    console.log("Login response", response)
                );
            } catch (error) {
                console.error("Login failed: ", error);
            }
        } else {
            toast.error("Please fill all input boxes.");
        }
    };

    useEffect(() => {
        if (isLoginSuccess) {
            toast.success("User logged in successfully.");
            dispatch(setUser({name: loginData.data.user_data.user.name, token: loginData.data.user_data.token}))
            console.log("Login success");
            navigate("/");
        }
    }, [isLoginSuccess, navigate]);

    return (
        <section className="text-center">
            <div className="relative">
                <h2 className="text-white text-2xl">JOIN ENGLISH DAILY ACADEMY</h2>
                <form className="grid grid-row-4 gap-y-[20px] px-[20px] mt-[3rem] ml-[20rem] mr-[20rem] relative" onSubmit={handleLogin}>
                    <h2 className="text-white text-2xl mb-[10px]">Login With Google</h2>
                    <button className="h-[60px]  w-[420px] rounded-[10px] font-semibold bg-white justify-self-center">Login With Google</button>
                    <div className="text-white mt-[10px] mb-[10px] justify-self-center relative or">OR</div>
                    <i className='text-[#D00029] absolute left-[10rem] bottom-[150px] icon'><MdEmail size={30} /></i>
                    <input type="email" value={email} name="email" onChange={handleChange} className="h-[55px] w-[420px] rounded-[10px] outline-none justify-self-center"></input>
                    <i className='text-[#D00029] absolute bottom-[80px] left-[10rem] icon'><PiLockKeyFill size={30} /></i>
                    <input type="password" value={password} name="password" onChange={handleChange} className="h-[55px] w-[420px] rounded-[10px] outline-none justify-self-center"></input>
                    <button type="submit" className="bg-[#D00029] rounded-[10px] p-[10px] w-[140px] h-[43px] justify-self-center">Login</button>
                </form>
            </div>
        </section>
    );
}

export default Login;