import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Assests/animations/loading.json";
// import groovyWalkAnimation from "./groovyWalk.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Lottie options={defaultOptions} width={600} height={600} />
      {/* <Lottie animationData={groovyWalkAnimation} />; */}
    </div>
  );
};

export default Loader;
