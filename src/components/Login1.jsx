import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { PiEye } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import { IoIosCheckbox } from "react-icons/io";
import { RiCheckboxBlankFill } from "react-icons/ri";
function Login1(){
    const [recaptcha, setRecaptcha] = useState(null);
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [activeTab, setActiveTab] = useState("Email");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const grecaptchaObject = window.grecaptcha ;

    console.log('this is password', password);
    console.log("this is email", email);
    console.log("this is phone",phone);

    const handleLogin = async (e) => {
        e.preventDefault();
      
         // Collect data
    const emailOrPhone = activeTab === "Email" ? email : phone;
    console.log("hhh", emailOrPhone)


    console.log('this is phone', phone);
    console.log("this is email", email);

    }

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const handleButtonClick = () => {
        setIsButtonActive(true); // Set to true when clicked
    };

    const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);
    };
    return(
        <div className="grid place-items-center min-h-screen">
        <div className=" w-[400px] h-[695.48px] flex-col items-center justify-center">
            <div className=" w-[400px] h-[167.5px] mb-5">
                <div className="w-[400px] h-[104px] flex-col items-center justify-center mb-4">
                    <h1 className="font-bold text-[40px] text-[#2C3E50] text-left">
                        <span className="text-[40px] font-bold text-[#00BCD4] mr-2">Connect</span>Anytime,
                    </h1>
                    <div className="text-[40px] font-bold text-[#2C3E50] text-left">Anywhere</div>
                </div>
                <div className=" w-[400px] h-[48px] text-left ml-1">
                    <span className="text-[16px] text-[#7E7E8D]">Lorem ipsum dolor sit amet consectetur. Arcu sapien sem velit nam leo et sit pellentesque donec.</span>
                </div>
            </div>
            <div className=" w-[400px] h-[487.98px] flex-col items-center justify-center">
                <div className=" w-[400px] h-[43px] flex items-center justify-center ">
                    <div
                    onClick={() => setActiveTab("Email")}
                    className={`w-[200px] h-[43px]  flex items-center justify-center cursor-pointer ${
                        activeTab === "Email" ? "text-[#2C3E50] border-b-2 border-[#00BCD4]" : "text-[#7E7E8D]"
                    }`}
                    >
                    Email
                    </div>
                    <div
                    onClick={() => setActiveTab("Phone")}
                    className={`w-[200px] h-[43px]  flex items-center justify-center cursor-pointer ${
                        activeTab === "Phone" ? "text-[#2C3E50] border-b-2 border-[#00BCD4]" : "text-[#7E7E8D]"
                    }`}
                    >
                    Phone
                    </div>               
                </div>
                
                <div className=" w-[400px] h-[304.36px] flex-col items-center justify-center">
                    <div className="w-[400px] h-[152.28px] flex-col items-center justify-center">
                         {/* Input Fields */}
                        <form className="w-[400px] h-[110.25px] flex-col items-center justify-center">

                        <div className="mt-4">
                                {activeTab === "Email" ? (
                                    <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`rounded-lg w-[400px] h-[48px] text-[#2C3E50] flex items-center px-3 cursor-pointer bg-[#EEF0F2] ${
                                        isButtonActive ? " focus:outline-[#0097A7] focus:outline focus:outline-1 " : ""
                                    }`}
                                    onFocus={handleButtonClick} // Activates on focus
                                    required
                                    />
                                ) : (
                                    <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className={`rounded-lg w-[400px] h-[48px] text-[#2C3E50] flex items-center px-3 cursor-pointer bg-[#EEF0F2] ${
                                        isButtonActive ? " focus:outline-[#0097A7] focus:outline focus:outline-1 " : ""
                                    }`}
                                    onFocus={handleButtonClick} // Activates on focus
                                    required
                                    pattern="\\d{10}" 
                                    title="Please enter a valid 10-digit phone number."
                                    />
                                )}
                                
                                </div>
                        <div className=" w-[400px] h-[46.25px] flex items-center justify-between rounded-lg bg-[#EEF0F2] mt-4">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-[232.48px] h-[23px] text-[#8C8CA1] ml-2 bg-[#EEF0F2] border-none outline-none"
                            />
                            <div
                                className="w-[19.37px] h-[19.37px] flex items-center justify-center mr-4 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {isPasswordVisible ? (
                                <PiEye className="w-[20px] h-[20px] text-[#8C8CA1]" />
                                ) : (
                                <PiEyeSlash className="w-[20px] h-[20px] text-[#8C8CA1]" />
                                )}
                            </div>
                               
                            </div>
                        </form>
                        <div className="w-[400px] h-[30.03px] mt-3 flex items-center justify-between">
                            <div className="w-[149.84px] h-[30.03px] flex items-center justify-between">
                            <div className="ml-1 w-[25px] h-[25px]  rounded flex items-center justify-center cursor-pointer"  onClick={toggleCheckbox}>  {isChecked ? (
                            <IoIosCheckbox className="text-[#0097A7] w-[25px] h-[25px]" />
                            ) : (
                            <RiCheckboxBlankFill className="text-[#ECF1F4] w-[25px] h-[25px]" />
                            )} </div>
                                <div className="w-[114px] h-[21px] text-[#8C8CA1] text-[13.8px]">Keep my account</div>
                            </div>
                            <a href="#forgot-password" className="text-[#2C3E50] font-bold text-sm mr-1">
                            Forgot Password?
                            </a>
                        </div>
                    </div>
                    <div className=" w-[292.54px] h-[73.62px] mt-2 ml-1">
                    <ReCAPTCHA
                        sitekey="6LdJnUEqAAAAAOBrwZRBiDZw_yKwqNSsKW7EU7Pt"
                        onChange={(val)=> setRecaptcha(val)}
                        grecaptcha={grecaptchaObject}                     
                    />
                    </div>
                    <button 
                    type="submit"
                    disabled={!recaptcha} 
                    onClick={handleLogin} 
                    className=" w-[400px] h-[45.53px] text-white bg-[#00BCD4] font-medium text-[17.44px] rounded-lg flex items-center justify-center mt-5"
                    >
                        Login</button>
                </div>
                <div className="border w-[380px] h-[0px] text-[#ECF1F4] mt-2 ml-2"></div>
                <div className=" w-[400px] h-[80.62px] mt-2">
                    <label className="w-[146px] h-[21px] text-[#7E7E8D] text-[14px] ">Not on Digizenger yet?</label>
                    <div className="mt-3 rounded-lg bg-[#ECF1F4] w-[400px] h-[48px] flex items-center justify-center">
                    <label className="w-[146px] h-[21px] text-[#2C3E50] text-[16px]  font-bold ">Create an account</label>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )

}
export default Login1;