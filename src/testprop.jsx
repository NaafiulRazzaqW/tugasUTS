import React from "react";

const Button = (props) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md bg-${props.variant}-700 text-white`}
      type="submit"
    >
      {props.text}
    </button>
  );
};

export default function Testprop() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button variant="red" text="Login"></Button>
        <Button variant="slate" text="Login"></Button>

      </div>
    </div>
  );
}
