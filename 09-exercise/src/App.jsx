import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!search) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`https://api.github.com/users/${search}`);

      const data = await response.json();

      if (data.message === "Not Found") {
        setError("User not found");
      } else {
        setUser(data);
        // console.log(data);
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h2>GitHub User Search</h2>

      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div>
          <h3>{user.name}</h3>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <p>Public Repos: {user.public_repos}</p>
          <p>Followers: {user.followers}</p>
        </div>
      )}
    </>
  );
};

export default App;
