import { useState , useRef, useEffect} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


function Login() {
  const [activeForm, setActiveForm] = useState("form1");
  const [activeLinkStyles, setActiveLinkStyles] = useState({ width: "169px", left: "536px" });
  const [recaptcha, setRecaptcha] = useState(null);
  const defaultActive = useRef();

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


  return (
    <section className="mb-[20px]">
      <main className="ml-[-60px]">
        <div className="mt-[-10px] grid mb-[10px] ">
          <h1 className="text-[36px] font-bold">
            <span className="text-[#00BCD4] text-[36px] font-bold">Connect</span> Anytime,
          </h1>
          <div className="ml-[-7rem] text-[36px] font-bold">AnyWhere</div>
          <div className="text-left justify-self-center w-[400px] ml-[8rem] text-slate-400 mt-[10px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt alias dolorem corporis non labore vitae modi?
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-[12%_12%] justify-center ml-[50px] relative">
          <button ref={defaultActive} className="text-center py-[10px]" onClick={(e) => handleTabClick(e, "form1")}>
            Email
          </button>
          <button className="text-center" onClick={(e) => handleTabClick(e, "form2")}>
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
            <form className="grid grid-row-2 gap-y-[15px] px-[20px] mt-[1rem]  ml-[5rem] text-center">
                <input type="email" name="email" placeholder="Enter your email" className="h-[45px] w-[350px] pl-[20px] rounded-[10px] border  outline-none border-[#00BCD4] justify-self-center" />
                <input type="password" name="password" placeholder="Enter your password" className="h-[45px] w-[350px] pl-[20px] rounded-[10px] bg-[#ECF1F4] outline-none justify-self-center" />
                <div>
                    <input type="checkbox" className="mr-[13px]" />
                    <span className="mr-[45px] text-sm text-slate-400">Keep My Account</span>
                    <span className="ml-[30px] font-semibold">Forget Password?</span>
                </div>
                <div className="justify-self-center ml-[-40px]">
                    <ReCAPTCHA
                        sitekey="6LdJnUEqAAAAAOBrwZRBiDZw_yKwqNSsKW7EU7Pt"
                        onChange={(val)=> setRecaptcha(val)}
                        grecaptcha={grecaptchaObject}
                    />
                </div>
                <Link><button className="py-[10px] bg-[#00BCD4] w-[350px] justify-self-center text-white rounded-lg" disabled={!recaptcha}>Login</button></Link>
                <div className="justify-self-center mt-[15px]">
                    <span className="text-slate-400">Not On Digizenger Yet?</span>
                    <button className="block font-semibold text-black py-[10px] bg-[#00BCD4] w-[350px] justify-self-center bg-[#ECF1F4] rounded-lg mt-[10px]">Create An Account</button>
                </div>
            </form>
            )}

            {activeForm === "form2" && (
            <form className="grid grid-row-2 gap-y-[15px] px-[20px] mt-[1rem] ml-[5rem] text-center">
                <PhoneInput 
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="RU"
                    value={value}
                    onChange={onChange2}
                    type="phone" name="phone" placeholder="Enter your phone number" 
                    className="h-[45px] w-[350px] pl-[20px] rounded-[10px] border  outline-none justify-self-center border-[#00BCD4] " 
                />
                <input type="password" name="password" placeholder="Enter your password" className="h-[45px] w-[350px] pl-[20px] rounded-[10px] outline-none bg-[#ECF1F4] justify-self-center" />
                <div>
                    <input type="checkbox" className="mr-[13px]" />
                    <span className="mr-[45px] text-sm text-slate-400">Keep My Account</span>
                    <span className="ml-[30px] font-semibold">Forget Password?</span>
                </div>
                <div className="justify-self-center ml-[-40px]">
                    <ReCAPTCHA
                        sitekey="6LdJnUEqAAAAAOBrwZRBiDZw_yKwqNSsKW7EU7Pt"
                        onChange={(val)=> setRecaptcha(val)}
                        grecaptcha={grecaptchaObject}
                    />
                </div>
                <Link to="/"><button className="py-[10px] bg-[#00BCD4] w-[350px] justify-self-center text-white rounded-lg" disabled={!recaptcha}>Login</button></Link>
                <div className="justify-self-center mt-[15px]">
                    <span className="text-slate-400 ">Not On Digizenger Yet?</span>
                    <button className="block font-semibold text-black py-[10px] bg-[#00BCD4] w-[350px] justify-self-center bg-[#ECF1F4] rounded-lg mt-[10px]">Create An Account</button>
                </div>
            </form>
            )}
        </div>
      </main>
    </section>
  );
}

export default Login;
