import { useState , useRef, useEffect} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useLoginUserMutation } from "../api/Auth";
import { useNavigate } from "react-router-dom";


function Login() {
  const [activeForm, setActiveForm] = useState("form1");
  const [activeLinkStyles, setActiveLinkStyles] = useState({ width: "", left: ""  });
  const [recaptcha, setRecaptcha] = useState(null);
  const defaultActive = useRef();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser,{isLoading, isSuccess, isError} ] = useLoginUserMutation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Phone value updated:", phone);
}, [phone]);

  const grecaptchaObject = window.grecaptcha ;

  const handleTabClick = (e, formName) => {
    setActiveForm(formName);
    const link = e.currentTarget;

    // Set the active link's width and left position
    setActiveLinkStyles({
      width: `${link.offsetWidth}px`,
      left: `${link.offsetLeft}px`,
    });
  };

  const [value, setValue] = useState('');

  const onChange2 = (phoneNumber) => {
    setValue(phoneNumber);
  };

  useEffect (()=>{
    if(defaultActive.current){
      setActiveLinkStyles({
        width: `${defaultActive.current.offsetWidth}px`,
        left: `${defaultActive.current.offsetLeft}px`,
      });
    }
  },[])

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Check if password is provided
    // if (!password) {
    //   console.error("Password is required");
    //   return;
    // }

    if (activeForm === 'form1' && (!email || !password)) {
      console.error("Email and Password are required for Form 1");
      return;
    }
    
    if (activeForm === 'form2' && (!phone || !password)) {
      console.error("Phone and Password are required for Form 2");
      return;
    }
  
    const credentials = {
      emailOrPhone: activeForm === 'form1' ? email : phone,
      password,
    };
  
    try {
      const response = await loginUser(credentials).unwrap();
      console.log("Login Successful", response);
    } catch (err) {
      console.error("Login Failed", err);
    }
  };

  useEffect(()=>{
    if(isSuccess){
      navigate("/")

    }
  })


  return (

    <section className="flex justify-center pt-[80px] mb-[20px]">
      <main className="login_main_container text-center">
        <div className="mt-[-10px] grid mb-[10px] ">
          <h1 className="login_header_text1 text-[36px] font-bold ">
            <span className="text-[#00BCD4] text-[36px] ml-[-4rem] font-bold">Connect</span> Anytime,
          </h1>
          <div className="login_header_text2 ml-[-11rem] text-[36px] font-bold">AnyWhere</div>
          <div className="login_body_text text-left justify-self-center w-[350px]  text-[#8C8CA1] mt-[10px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt alias dolorem corporis non labore vitae modi?
          </div>
        </div>

        {/* Tabs */}
        <div className="login_button_container flex flex-cols ml-[20px] mr-[20px] justify-center relative">
          <button ref={defaultActive} className="text-center login_filter_button py-[10px]" onClick={(e) => handleTabClick(e, "form1")}>
            Email
          </button>
          <button className="text-center login_filter_button " onClick={(e) => handleTabClick(e, "form2")}>
            Phone
          </button>

          {/* Active Tab Underline */}
          <div
            className="h-[2px] bg-[#00BCD4] absolute bottom-0 duration-300"
            style={{
              width: activeLinkStyles.width,
              left: activeLinkStyles.left,
            }}
          ></div>
        </div>

        {/* active form */}
        <div>
            {activeForm === "form1" && (
            <form className=" login_form grid grid-row-2 gap-y-[15px] px-[20px] mt-[1rem]  relative text-center">
                <input type="email" name="email" placeholder="Enter your email" className="h-[45px] w-[350px] pl-[20px] login_input_box rounded-[10px] border  outline-none border-[#00BCD4] justify-self-center" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type={open ? "text" : "password"} name="password" placeholder="Enter your password" className="h-[45px] w-[350px] login_input_box pl-[20px] rounded-[10px] bg-[#ECF1F4] outline-none justify-self-center" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {open ? 
                (<button className="eye_button1 absolute top-[4.7rem] left-[20rem]" 
                  onClick={(e)=> {
                  e.preventDefault();
                  setOpen(!open)}}>
                    <FaRegEye />
                 </button>) :
                (<button className="eye_button2 absolute top-[4.7rem] right-[3.3rem]" 
                  onClick={(e)=> {
                    e.preventDefault();
                    setOpen(!open)}}>
                    <FaRegEyeSlash />
                  </button>)
               }
                <div>
                    <input type="checkbox" className="mr-[10px] login_checkbox" />
                    <span className="mr-[40px] text-sm text-slate-400 login_keep_account">Keep My Account</span>
                    <span className="ml-[32px] font-semibold">Forget Password?</span>
                </div>
                <div className="login_recaptcha justify-self-center ml-[-42px]">
                    <ReCAPTCHA
                        sitekey="6LdJnUEqAAAAAOBrwZRBiDZw_yKwqNSsKW7EU7Pt"
                        onChange={(val)=> setRecaptcha(val)}
                        grecaptcha={grecaptchaObject}
                        
                    />
                </div>
                <Link><button className="py-[10px] bg-[#00BCD4] login_input_box w-[350px] justify-self-center text-white rounded-lg" disabled={!recaptcha}>Login</button></Link>
                <div className="w-[350px] bg-slate-100 h-[2px] login_input_box justify-self-center mt-[-5px]"></div>
                <div className="justify-self-center mt-[15px]">
                    <span className="text-slate-400">Not On Digizenger Yet?</span>
                    <button className="block font-semibold text-black py-[10px]  login_input_box hover:bg-[#C9DCDE] w-[350px] justify-self-center bg-[#ECF1F4] rounded-lg mt-[10px]">Create An Account</button>
                </div>
            </form>
            )}

            {activeForm === "form2" && (
            <form className="grid grid-row-2 gap-y-[15px] px-[20px] mt-[1rem] relative text-center">
                <PhoneInput 
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="RU"
                    value={phone}
                    onChange={(value) => setPhone(value)}

                    type="phone" 
                    name="phone" 
                    placeholder="Enter your phone number" 
                    className="h-[45px] w-[350px] login_input_box pl-[20px] rounded-[10px] border z-20 outline-none justify-self-center border-[#00BCD4] " 
                />
                <input type={open ? "text" : "password"} name="password" placeholder="Enter your password" className="h-[45px] w-[350px] pl-[20px] rounded-[10px] bg-[#ECF1F4] login_input_box outline-none justify-self-center" />
                {open ? 
                (<button className="eye_button1 absolute top-[4.7rem] left-[20rem]" 
                  onClick={(e)=> {
                  e.preventDefault();
                  setOpen(!open)}}>
                    <FaRegEye />
                 </button>) :
                (<button className="eye_button2 absolute top-[4.7rem] right-[3.3rem]" 
                  onClick={(e)=> {
                    e.preventDefault();
                    setOpen(!open)}}>
                    <FaRegEyeSlash />
                  </button>)
               }
                <div className="">
                    <input type="checkbox" className="mr-[13px] login_checkbox" />
                    <span className="mr-[45px] login_keep_account text-sm text-slate-400">Keep My Account</span>
                    <span className="ml-[30px] font-semibold">Forget Password?</span>
                </div>
                <div className="justify-self-center login_recaptcha ml-[-40px]">
                    <ReCAPTCHA
                        sitekey="6LdJnUEqAAAAAOBrwZRBiDZw_yKwqNSsKW7EU7Pt"
                        onChange={(val)=> setRecaptcha(val)}
                        grecaptcha={grecaptchaObject}
                    />
                </div>
                <Link to="/"><button className="py-[10px] bg-[#00BCD4] w-[350px] login_input_box justify-self-center text-white rounded-lg" disabled={!recaptcha}>Login</button></Link>
                <div className="w-[350px] login_input_box bg-slate-100 h-[2px] justify-self-center mt-[-5px]"></div>
                <div className="justify-self-center mt-[15px]">
                    <span className="text-slate-400 login_account_button login_input_box">Not On Digizenger Yet?</span>
                    <button className="block font-semibold login_input_box text-black py-[10px]  w-[350px] justify-self-center bg-[#ECF1F4] hover:bg-[#C9DCDE] rounded-lg mt-[10px]">Create An Account</button>
                </div>
            </form>
            )}
        </div>
      </main>
    </section>
  );
}

export default Login;
