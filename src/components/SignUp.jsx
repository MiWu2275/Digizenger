import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


function SignUp() {
  const [activeForm, setActiveForm] = useState("form1");
  const [activeLinkStyles, setActiveLinkStyles] = useState({ width: "169px", left: "536px" });
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
  },[])

  return (
    <section className="mt-[30px] mb-[20px]">
      <main className="ml-[-60px]">
        <div className="mt-[-10px] grid mb-[10px] text-center">
          <h1 className="text-[36px] text-[#00BCD4] font-bold ml-[-8rem] ">
            Welcome!
          </h1>
          <div className="ml-[-1rem] text-balance text-[36px] font-bold mt-[-10px]">Let's create your <h3 className="mt-[-10px] ml-[-9rem]">account</h3></div>
          <div className="text-left justify-self-center w-[400px] ml-[8rem] text-slate-400 mt-[15px]">
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
                <input type="email" name="email" placeholder="Enter your email" className="h-[45px] w-[350px] pl-[20px] rounded-[10px] border  bg-slate-100 outline-none hover:border-[#00BCD4] hover:bg-transparent justify-self-center" />
                <Link to="/signup/verify"><button className="py-[10px] bg-[#00BCD4] w-[350px] justify-self-center text-white rounded-lg" >Continue</button></Link>
                <div className="w-[350px] bg-slate-100 h-[2px] justify-self-center mt-[-5px]"></div>
                <div className="justify-self-center">
                    <span className="text-slate-400">Already have an account?</span>
                    <button className="block font-semibold text-black py-[10px] bg-[#00BCD4] w-[350px] justify-self-center text-black bg-slate-200 rounded-lg mt-[10px]">Login to Digizenger</button>
                </div>
            </form>
            )}

            {activeForm === "form2" && (
            <form className="grid grid-row-2 gap-y-[15px] px-[20px] mt-[1rem] ml-[4rem] text-center">
                <input type="phone" name="phone" placeholder="Enter your phone number" className="h-[45px] w-[350px] pl-[20px] rounded-[10px] border  justify-self-center bg-slate-100 outline-none hover:border-[#00BCD4] hover:bg-transparent " />
                <Link to="/signup/verify"><button className="py-[10px] bg-[#00BCD4] w-[350px] justify-self-center text-white rounded-lg" >Continue</button></Link>
                <div className="w-[350px] bg-slate-100 h-[2px] justify-self-center mt-[-5px]"></div>
                <div className="justify-self-center">
                    <span className="text-slate-400 ">Already have an account?</span>
                    <button className="block font-semibold text-black py-[10px] bg-[#00BCD4] w-[350px] justify-self-center text-black bg-slate-200 rounded-lg mt-[10px]">Login to Digizenger</button>
                </div>
            </form>
            )}
        </div>
      </main>
    </section>
  );
}

export default SignUp;
