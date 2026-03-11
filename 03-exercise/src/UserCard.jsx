const UserCard = ({UserName,UserEmail}) => {
    return(
        <>
        <h2>User: <span style={{color:"blue"}}>{UserName}</span></h2>
        <span>Email: {UserEmail}</span>
        </>
    )
}

export default UserCard;