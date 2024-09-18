import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";


function SignInfo() {
    const [radioButton, setRadioButton] = useState();
    const [checked, setChecked] = useState(false);
    const [password, setpassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);

    const radioHandle = (e) => {
        setRadioButton(e.target.value)
    }

    const checkHandle = (e) => {
        setChecked(!checked);
    }

  return (
    <section className="flex  justify-center  container w-full mb-[20px] mt-[35px]">
      <main className="text-center user_info_container">
        <div className="mt-[-10px] grid mb-[20px] ">
                <div className=" text-[36px] ml-[-20rem] font-bold mt-[-10px]">
                    <span className="user_info_header1 text-[#00BCD4]">Tell us more </span>
                    <span className="user_info_header2">about you</span>
                </div>
                <div className="user_info_body_text text-left ml-[6.5rem] w-[400px] text-[#8C8CA1] mt-[5px]">
                    Fill in your detail to create your account. 
                </div>
        </div>

        <div className="user_info_form_container grid grid-cols-2 gap-2 px-4">
            <form className="user_info_form1_container space-y-4 px-5 mt-4 ml-16">
            <div className="user_info_input_container flex gap-4">
                <div className="grid w-full">
                    <label className="block place-self-start text-slate-500 mb-[10px]">First Name:</label>
                    <input
                    type="text"
                    name="firstName"
                    className="w-[150px] h-[40px] pl-[10px] rounded-[5px] bg-[#ECF1F4]"
                    />
                </div>
                <div className="grid">
                    <label className="block place-self-start text-slate-500 mb-[10px]">Last Name:</label>
                    <input
                    type="text"
                    name="lastName"
                    className="w-[150px] h-[40px] pl-[10px] rounded-[5px] bg-[#ECF1F4]"
                    />
                </div>
            </div>

                <div className="grid">
                        <label className="block place-self-start text-slate-500 mb-[10px]">Email Or Phone Number:</label>
                        <input
                            type="text"
                            name="lastName"
                            className="w-[315px] h-[40px] pl-[10px] rounded-[5px] bg-[#ECF1F4]"
                        />
                </div>
                <div className="grid">
                      <label className="block place-self-start text-slate-500 mb-[10px]">Date Of Birth:</label>
                      <div className="flex gap-3">
                          <div className="grid">
                              <select id="options" name="options" className="w-[96.5px] h-[40px] px-[10px] border-2 border-[#ECF1F4] rounded-[5px] text-slate-400 ">
                                    <option value="option1">Day</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                    <option value="option4">Option 4</option>
                              </select>
                          </div>
                          <div className="">
                              <select id="options" name="options" className="w-[96.5px] h-[40px] px-[10px] text-slate-400 rounded-[5px] border-2 border-[#ECF1F4]">
                                        <option value="option1">Month</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                        <option value="option4">Option 4</option>
                              </select>
                          </div>
                          <div className="">
                              <select id="options" name="options" className="w-[96.5px] h-[40px] text-slate-400 rounded-[5px] px-[10px] border-2 border-[#ECF1F4]">
                                        <option value="option1">Year</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                        <option value="option4">Option 4</option>
                                </select>
                          </div>
                      </div>
                </div>

                <div className="grid">
                      <label className="block place-self-start text-slate-500 mb-[10px]">Gender:</label>
                      <div className="flex gap-3">
                          <div className="flex items-center">
                              <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={radioButton === "Male"}
                                onChange={radioHandle}
                                className={`bg-[#ECF1F4]  h-[18px] w-[19px] rounded-[50px] appearance-none relative ${radioButton === "Male" ? "radio_check border-2  border-[#00BCD4]" :" "}`}
                                />
                              <label className="ml-[10px] mr-[20px] place-self-center">Male</label>
                          </div>
                          <div className="flex items-center">
                              <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={radioButton === "Female"}
                                onChange={radioHandle}
                                className={`bg-[#ECF1F4]  h-[18px] w-[19px] rounded-[50px] relative appearance-none ${radioButton === "Female" ? "border-2 border-[#00BCD4] radio_check" :" "}`}
                              />
                              <label className="ml-[10px] mr-[20px] ">Female</label>
                          </div>
                          <div className="flex items-center">
                              <input
                                type="radio"
                                name="gender"
                                value="Other"
                                checked={radioButton === "Other"}
                                onChange={radioHandle}
                                className={`bg-[#ECF1F4]  h-[18px] w-[19px] rounded-[50px] appearance-none relative ${radioButton === "Other" ? "border-2 border-[#00BCD4]  radio_check " :" "}`}
                              />
                              <label className="ml-[10px] mr-[20px]">Other</label>
                          </div>
                      </div>
                </div>

            </form>


            <form className="user_info_form2_container space-y-4 px-5 mt-4">
                
                <div className="grid">
                     <label className="block place-self-start text-slate-500 mb-[10px]">Country:</label>
                     <select id="options" name="options" className="w-[315px] h-[40px] text-slate-400 rounded-[5px] px-[10px] pl-[10px] border-2 border-[#ECF1F4]">
                                        <option value="option1">Thailand</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                        <option value="option4">Option 4</option>
                      </select>
                </div>
                <div className="grid">
                     <label className="block place-self-start text-slate-500 mb-[10px]">City:</label>
                     <input
                          type="text"
                          name="lastName"
                          className="w-[315px] h-[40px] pl-[10px] rounded-[5px] bg-[#ECF1F4]"
                      />
                </div>
                <div className="grid relative">
                     <label className="block place-self-start text-slate-500 mb-[10px]">Password:</label>
                     <input
                          type={password ? "text" : "password"}
                          name="lastName"
                          className="w-[315px] h-[40px]  pl-[10px] rounded-[5px] bg-[#ECF1F4]"
                      />
                      {password ? 
                            (<button className="eye_button1 absolute top-[3rem] left-[17.5rem]" 
                            onClick={(e)=> {
                            e.preventDefault();
                            setpassword(!password)}}>
                                <FaRegEye />
                            </button>) :
                            (<button className="eye_button2 absolute top-[3rem] right-[5rem]" 
                            onClick={(e)=> {
                                e.preventDefault();
                                setpassword(!password)}}>
                                <FaRegEyeSlash />
                            </button>)
                    }
                </div>
                <div className="grid relative">
                     <label className="block place-self-start text-slate-500 mb-[10px]">Confirm Password:</label>
                     <input
                          type={confirmPassword ? "text" : "password"}
                          name="lastName"
                          className="w-[315px] h-[40px] pl-[10px] rounded-[5px] bg-[#ECF1F4]"
                      />
                      {confirmPassword ? 
                            (<button className="eye_button1 absolute top-[3rem] left-[17.5rem]" 
                            onClick={(e)=> {
                            e.preventDefault();
                            setConfirmPassword(!confirmPassword)}}>
                                <FaRegEye />
                            </button>) :
                            (<button className="eye_button2 absolute top-[3rem] right-[5rem]" 
                            onClick={(e)=> {
                                e.preventDefault();
                                setConfirmPassword(!confirmPassword)}}>
                                <FaRegEyeSlash />
                            </button>)
                    }
                </div>
            </form>

        </div>
        <div className="user_info_button_container flex flex-col justify-start mt-8 ml-[6rem] w-[645px]">
            <div className=" user_button_container text-left flex relative">
                <input type="checkbox" id="agree" name="agree" onChange={checkHandle} className={`h-[20px] w-[35px] appearance-none mr-2 ${checked ? " bg-[#00BCD4] ": "bg-[#ECF1F4] "} cursor-pointer `} />
                
                <div className={`absolute inset-0 flex items-center top-[-1.9rem] pointer-events-none ${checked ? 'opacity-100' : 'opacity-0'}`}>
                     <IoIosCheckmark className="text-white text-xl" />
                
                </div>
                <label htmlFor="agree" className="user_info_agree text-[#8C8CA1] ml-2 items-center text-left">By singing up,you accept our terms,privacy policy and cookie policy. By singing up,you accept our terms,privacy policy and cookie policy.</label>
            </div>
              <button className="w-[315px] user_info_button px-14 py-1 mt-[20px] text-lg  font-semibold  bg-[#0097A7] text-white rounded-md">
              <Link to="/signup/requestIdentity">Sign Up</Link>
              </button>
            
        </div>
      </main>
    </section>
  );
}

export default SignInfo;
