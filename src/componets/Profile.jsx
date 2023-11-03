import { useSelector } from "react-redux";
function Profile() {
  const user = useSelector((state)=> state.user.value)
  const themeColor = useSelector((state) => state.theme.value)
  return (
    <div className="text-white space-y-12 align-start" style={{background:themeColor}}>
      <h1 className="text-2xl">Profile Page</h1>
      <p>Name:{user.name} </p>
      <p>Age:{user.age} </p>
      <p>Email:{user.email} </p>
    </div>
  );
}

export default Profile;
