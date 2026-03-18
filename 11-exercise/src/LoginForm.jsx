import { useState } from "react";

const LoginForm = () => {
  const [Username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(false);

  const handleForm = () => {
    if (Username.trim() !== "" && password.trim() !== "") {
      setLogin(true);
    }
  };

  return isLogin ? (
    <div>
      <h1>Welcome, {Username}</h1>
      <button
        onClick={() => {
          setLogin(false);
          setUserName("");
          setPassword("");
        }}
      >
        Logout
      </button>
    </div>
  ) : (
    <div>
        <form  onSubmit={handleForm}  >
      <label>Username:</label>
      <input
        value={Username}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        required
      />{" "}
      <br />
      <label>Password:</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        required
      />{" "}
      <br />
      <button onClick={handleForm} type="submit">
        Login
      </button>
      </form>
    </div>
  );
};

export default LoginForm;
