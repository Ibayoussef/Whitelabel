import cross from "./assets/delete.svg";
import img from "./assets/img.jpg";
import heart from "./assets/heart.svg";
import { useState } from "react";

function App() {
  const [showUndo, setShowUndo] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number>(0);

  const postData = async () => {
    try {
      await fetch("https://eojusqt88aiah24.m.pipedream.net", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: "" }),
      }).then(() => setShowUndo(false));
    } catch (error) {
      console.error(error);
    }
  };
  const handleSendRequest = () => {
    setShowUndo(true);
    const requestTime = setTimeout(() => postData(), 5000);
    setTimeoutId(requestTime);
  };
  const handleCancelRequest = () => {
    clearTimeout(timeoutId);
    setShowUndo(false);
  };
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="absolute bg-gradient-to-r from-[#fa1043] to-[#c81233] w-full h-[50%] top-0 left-0 rounded-b-full"></div>
      <div className="relative w-[350px] h-[600px] mt-20">
        <h1 className="text-white absolute -top-16 font-bold text-3xl">
          Discover
        </h1>
        <img src={img} className="absolute top-0 left-0 rounded-lg " alt="" />
        <div className="absolute bottom-8 left-0 bg-white w-full shadow-lg rounded-xl p-4">
          <h1 className="text-lg font-bold">Rohini</h1>
          <p className="text-[#b3aeae] text-base ">10 miles away</p>
        </div>
        <div className="flex flex-row absolute -bottom-[80px] left-[50%] translate-x-[-50%] gap-4 justify-center items-center">
          {showUndo && (
            <button onClick={() => handleCancelRequest()}>Undo</button>
          )}
          <button className="w-[80px] h-[80px] border-2 flex justify-center items-center shadow-xl rounded-full bg-white">
            <img src={cross} onClick={() => handleSendRequest()} alt="delete" />
          </button>
          <button className="w-[80px] h-[80px] border-2 flex justify-center items-center  shadow-xl rounded-full bg-white">
            <img src={heart} onClick={() => handleSendRequest()} alt="heart" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
