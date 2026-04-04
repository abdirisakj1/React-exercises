import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [selectOption, setSelectOption] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!isChecked) {
    alert("Please accept our terms!");
    return;
  }

  if (selectOption === "") {
    alert("Please choose tech");
    return;
  }

  console.log(formData);
  console.log(selectOption);
  console.log(isChecked);
};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter UserName"
          onChange={handleChange}
          value={formData.username}
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="number"
          name="phone"
          placeholder="Enter Number"
          onChange={handleChange}
          value={formData.phone}
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          value={formData.password}
        />{" "}
        <br />
        <select
          value={selectOption}
          onChange={(e) => setSelectOption(e.target.value)}
        >
          <option value="">Select your Backend tech</option>
          <option value="nodejs">Nodejs</option>
          <option value="php">PHP</option>
          <option value="django">Django</option>
        </select> 
        <br />
        <label>Terms and Condition</label>
        <input
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
          }}
          type="checkbox"
        />{" "}
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
