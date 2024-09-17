import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


function SignUp() {
  const [activeForm, setActiveForm] = useState("form1");
  const [activeLinkStyles, setActiveLinkStyles] = useState({ width: "50%", left: "" });
  const [recaptcha, setRecaptcha] = useState(null);
  const defaultActive = useRef();

  const handleTabClick = (e, formName) => {
    setActiveForm(formName);
    const link = e.currentTarget;

    setActiveLinkStyles({
      width: `${link.offsetWidth}px`,
      left: `${link.offsetLeft}px`,
    });
  };

  useEffect (()=>{
    if(defaultActive.current){
      setActiveLinkStyles({
        width: `${defaultActive.current.offsetWidth}px`,
        left: `${defaultActive.current.offsetLeft}px`,
      });
    }
  },[defaultActive.current])

  return (
    <section className="flex justify-center mt-[30px] mb-[20px]">
      <main className=" signin_main_container text-center ml-[-5rem] ">
        <div className="mt-[-10px] grid mb-[10px] text-center">
          <h1 className="signin_header_text text-[36px] text-[#00BCD4] font-bold ml-[-8rem] ">
            Welcome!
          </h1>
          <div className="signin_header_text ml-[-1rem] text-balance text-[36px] font-bold mt-[-10px]">Let's create your <h3 className="mt-[-10px] ml-[-9rem]">account</h3></div>
          <div className="signin_body_text text-left justify-self-center w-[400px] ml-[7rem] text-[#8C8CA1] mt-[15px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt alias dolorem corporis non labore vitae modi?
          </div>
        </div>

        {/* Tabs */}
        <div className="signin_button_container flex flex-cols ml-[130px] mr-[20px] justify-center relative">
          <button ref={defaultActive} className="text-center login_filter_button py-[10px]" onClick={(e) => handleTabClick(e, "form1")}>
            Email
          </button>
          <button className="text-center login_filter_button" onClick={(e) => handleTabClick(e, "form2")}>
            Phone
          </button>

          {/* Active Tab Underline */}
          <div
            className="h-[2px] bg-[#00BCD4] w-[330px] absolute bottom-0 duration-300"
            style={{
              width: activeLinkStyles.width,
              left: activeLinkStyles.left,
            }}
          ></div>
        </div>

        {/* active form */}
        <div>
            {activeForm === "form1" && (
            <form className="grid grid-row-2 gap-y-[15px] px-[20px] mt-[1rem]  ml-[4rem] text-center">
                <input type="email" name="email" placeholder="Enter your email" className="signin_input_box h-[45px] ml-[44px] w-[400px] pl-[20px] rounded-[10px] border  bg-slate-100 outline-none hover:border-[#00BCD4] hover:bg-transparent justify-self-center" />
                <Link to="/signup/verify"><button className="py-[10px] bg-[#00BCD4] w-[400px] justify-self-center ml-[44px] text-white rounded-lg signin_input_box" >Continue</button></Link>
                <div className="w-[400px] bg-slate-100 ml-[44px] h-[2px] justify-self-center mt-[-5px] signin_input_box"></div>
                <div className="justify-self-center">
                    <span className="text-slate-400 justify-self-center ml-[4rem]">Already have an account?</span>
                    <button className="block font-semibold text-black py-[10px] bg-[#00BCD4] ml-[44px] w-[400px] justify-self-center text-black bg-slate-200 rounded-lg mt-[10px] signin_input_box">Login to Digizenger</button>
                </div>
            </form>
            )}

            {activeForm === "form2" && (
            <form className="grid grid-row-2 gap-y-[15px] px-[20px] mt-[1rem]  ml-[4rem] text-center">
                <input type="phone" name="phone" placeholder="Enter your phone number" className="h-[45px] ml-[44px] w-[400px] pl-[20px] rounded-[10px] border  bg-slate-100 outline-none hover:border-[#00BCD4] hover:bg-transparent signin_input_box justify-self-center" />
                <Link to="/signup/verify"><button className="py-[10px] bg-[#00BCD4] w-[400px] justify-self-center ml-[44px] text-white rounded-lg signin_input_box" >Continue</button></Link>
                <div className="w-[400px] bg-slate-100 ml-[44px] h-[2px] justify-self-center mt-[-5px] signin_input_box"></div>
                <div className="justify-self-center">
                    <span className="text-slate-400 ml-[4rem] ">Already have an account?</span>
                    <button className="block font-semibold text-black py-[10px] bg-[#00BCD4] ml-[44px] w-[400px] justify-self-center text-black bg-slate-200 rounded-lg mt-[10px] signin_input_box">Login to Digizenger</button>
                </div>
            </form>
            )}
        </div>
      </main>
    </section>
  );
}

export default SignUp;
