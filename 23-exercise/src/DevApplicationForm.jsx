import React, { useState } from "react";

export const DevApplicationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "",
    skills: [],
    experience: "",
    agreement: false,
    notification: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Fullname is required";
    } else if (
      formData.username.length < 2 ||
      formData.username.length > 30 ||
      !/^[a-zA-Z\s]+$/.test(formData.username)
    ) {
      newErrors.username = "Please enter a valid name [2-30, letters only]";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.role.trim()) {
      newErrors.role = "please select role";
    }
    if (!formData.experience) {
      newErrors.experience = "Experience is required";
    } else if (formData.experience < 0 || formData.experience > 50) {
      newErrors.experience = "Enter valid experience (0–50)";
    }
    if (formData.skills.length === 0) {
      newErrors.skills = "Please select at least one skill";
    }

    if (!formData.agreement) {
      newErrors.agreement = "you must agree the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      if (checked) {
        return {
          ...prev,
          skills: [...prev.skills, value],
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidErrors = validateForm();
    if (!isValidErrors) return;
    console.log(formData);
  };
  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <div className="bg-white max-w-2xl mx-auto   p-4 shadow w-1/3 rounded-xl">
        <h2 className="text-2xl text-gray-700 text-center font-medium">
          Developer Application Form
        </h2>
        <form className="mt-4 flex flex-col gap-2" onSubmit={handleSubmit}>
          {/* fullname */}
          <div className="flex flex-col">
            <label className="text-gray-600 text-md font-medium">
              Full Name
            </label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`border ${errors.username ? "border-red-500" : "border-gray-400"}  py-1 rounded-sm`}
              type="text"
            />
            {errors.username && (
              <p className="text-red-500 mt-2 text-sm">{errors.username}</p>
            )}
          </div>
          {/* email */}
          <div className="flex flex-col">
            <label className="text-gray-600 text-md font-medium">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`border ${ errors.email ? "border-red-500" : "border-gray-400"} py-1 rounded-sm`}
              type="text"
            />
            {errors.email && (
              <p className="text-red-500 mt-2 text-sm">{errors.email}</p>
            )}
          </div>

          {/* choose role */}
          <div className="flex flex-col ">
            <label className="text-gray-600 text-md font-medium">Role</label>
            <select
              onChange={handleChange}
              name="role"
              value={formData.role}
              className={`border ${errors.role ? "border-red-500" : "border-gray-400"} py-1 rounded-sm`}
            >
              <option value="">select role</option>
              <option value="frontend">Frontend</option>
              <option value="backend">backend</option>
              <option value="UI/UX">UI/UX</option>
            </select>
            {errors.role && (
              <p className="text-red-500 mt-2 text-sm">{errors.role}</p>
            )}
          </div>

          {/* experince */}
          <div className="flex flex-col">
            <label className="text-gray-600 text-md font-medium">
              Years of Experience
            </label>
            <input min={0}
              value={formData.experience}
              name="experience"
              onChange={handleChange}
              className={`border ${ errors.experience ? "border-red-500" : "border-gray-400"} py-1 rounded-sm`}
              type="number"
            />
            {errors.experience && (
              <p className="text-red-500 mt-2 text-sm">{errors.experience}</p>
            )}
          </div>

          {/* skills */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-600 text-md font-medium">Skills</label>

            {/*  */}
            <div className="flex space-x-20">
              <div className="flex flex-col gap-2">
                {/*  */}
                <div className="flex gap-2 items-center">
                  <input
                    value="react"
                    onChange={handleSkillsChange}
                    checked={formData.skills.includes("react")}
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-gray-700 text-sm font-medium">React</p>
                </div>

                <div className="flex gap-2 items-center">
                  <input
                    value="typescript"
                    checked={formData.skills.includes("typescript")}
                    onChange={handleSkillsChange}
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-gray-700 text-sm font-medium">
                    Typescript
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    value={"python"}
                    onChange={handleSkillsChange}
                    checked={formData.skills.includes("python")}
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                  />
                  <p>python</p>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    value="UiDesign"
                    onChange={handleSkillsChange}
                    checked={formData.skills.includes("UiDesign")}
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-gray-700 text-sm font-medium">Ui Design</p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <input
                    value="javascript"
                    checked={formData.skills.includes("javascript")}
                    onChange={handleSkillsChange}
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-gray-700 text-sm font-medium">
                    Javascript
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    value="nodejs"
                    onChange={handleSkillsChange}
                    checked={formData.skills.includes("nodejs")}
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                  />
                  <p>nodejs</p>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    value="java"
                    checked={formData.skills.includes("java")}
                    onChange={handleSkillsChange}
                    className="w-4 h-4 cursor-pointer"
                  />{" "}
                  <p className="text-gray-700 text-sm font-medium">Java</p>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    value="api"
                    onChange={handleSkillsChange}
                    checked={formData.skills.includes("api")}
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-gray-700 text-sm font-medium">
                    Api Development
                  </p>
                </div>
              </div>
            </div>
            {errors.skills && (
              <p className="text-red-500 mt-2 text-sm">{errors.skills}</p>
            )}
          </div>

          {/* agreemnet */}

          <div className="flex gap-2 items-center mt-4">
            <input
              name="agreement"
              onChange={handleChange}
              checked={formData.agreement}
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
            />
            <p className="text-gray-700 text-sm font-medium">
              I agree the terms and conditions
            </p>
            
          </div>
          {errors.agreement && (
              <p className="text-red-500 mt-2 text-sm">{errors.agreement}</p>
            )}
          {/* notfictions check */}
          <div className="flex gap-2 items-center my-3">
            <input
              name="notification"
              onChange={handleChange}
              checked={formData.notification}
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
            />
            <p className="text-gray-700 text-sm font-medium">
              Recieve Notfications about new opportunities
            </p>
          </div>

          {/* btn */}
          <button
            className="bg-red-500 py-2 rounded-sm text-white text-md cursor-pointer"
            type="submit"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};
