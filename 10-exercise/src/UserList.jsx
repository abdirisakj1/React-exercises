const UserList = () => {
  const listUsers = [
    // {
    //   id: 1,
    //   name: "jaamaca",
    //   email: "jaamac@gmail.com",
    // },
    // {
    //   id: 2,
    //   name: "ahmed",
    //   email: "ahmed@gmail.com",
    // },
    // {
    //   id: 3,
    //   name: "nuur",
    //   email: "nuur@gmail.com",
    // },
    // {
    //   id: 4,
    //   name: "hasan",
    //   email: "hassan@gmail.com",
    // },
    // {
    //   id: 5,
    //   name: "Abdi",
    //   email: "abdi@gmail.com",
    // },
  ];
  return (
    <>
      <h2>List Of Users</h2>

      {listUsers.length > 0 ? (
         <ul>
          {listUsers.map((user) => (
            <li key={user.id}>
              {user.name}, <span>({user.email})</span>
            </li>
          ))}
        </ul>
      ) : (
               <p>Not found users!</p>

      )}
    </>
  );
};

export default UserList;
