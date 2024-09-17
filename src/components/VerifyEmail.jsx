import { useState } from "react";
import { Link } from "react-router-dom";

function VerifyEmail (){

    const [code, setCode] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    // Only accept numbers and limit input to 4 digits
    if (/^\d{0,6}$/.test(value)) {
      setCode(value);
    }
  };

  const renderMaskedCode = () => {
    let maskedCode = code.split("").map((digit) => digit).join(" ");
    maskedCode += " - ".repeat(6 - code.length).trim();
    return maskedCode;
  };

    return(
        <section className="flex justify-center mt-[30px]">
            <main className="text-wrap">
                <div>
                    <article className="grid text-wrap ">
                        <h1 className="text-[32px] font-semibold justify-self-start"><span className="text-[#00BCD4]">Verify </span> Your Email</h1>
                        <div className="text-slate-400 mt-[15px] mb-[15px] flex flex-col">
                            <span>We've emailed you a 4-digit code. Please check your</span>
                            <span className="self-start">inbox and enter it below.</span>
                        </div>
                    </article>
                </div>
                <div className="relative w-full mt-[20px] mb-[20px]">
                    <input
                    type="text"
                    value={code}
                    onChange={handleChange}
                    maxLength="6"
                    className="absolute inset-0 w-full  h-[40px]  pl-[7rem] bg-slate-300 opacity-[0.2] text-transparent caret-black outline-none"
                    style={{ letterSpacing: '1.5rem' }}
                    />
                    <div className="text-3xl w-full tracking-widest text-gray-500">{renderMaskedCode()}</div>
                </div>
                <p className="text-slate-400 text-sm  text-right mt-2">00:05</p>
                <Link to="/signup/verify/signinfo">
                    <button className="bg-[#0097A7] w-full text-white py-2 px-6 rounded-lg mt-4">
                        Continue
                    </button>
                </Link>
                
                
            </main>
        </section>
    )
}

export default VerifyEmail;