import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div className="space-y-7">
      <h1 className="text-white text-2xl">Login Here!</h1>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => {
            dispatch(login({ name: "Pedro", age: 20, email: "pedro@gmail.com" }));
          }}
          className="text-violet-900  bg-white rounded-md px-5 py-2 shadow-lg font-bold leading-9 hover:bg-gray-300"
        >
          Login
        </button>
        <button
          onClick={() => {
            dispatch(logout());
          }}
          className="text-violet-900  bg-white rounded-md px-5 py-2 shadow-lg font-bold leading-9 hover:bg-gray-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Login;
