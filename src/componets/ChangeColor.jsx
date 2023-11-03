import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";
import { useState } from "react";
function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 px-4">
      <input
        type="text"
        placeholder="Enter color"
        className="text-gray-900 italic bg-white px-12 py-2 shadow-lg font-bold leading-9"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button
        className="text-violet-900  bg-white rounded-md px-5 py-2 shadow-lg font-bold leading-9"
        onClick={() => dispatch(changeColor(color))}
      >
        Change Color
      </button>
    </div>
  );
}

export default ChangeColor;
