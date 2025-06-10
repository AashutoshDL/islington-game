import { useProgress } from "@react-three/drei";

const Loading = () => {
  const { progress } = useProgress();

  return (
    <div
      className="fixed inset-0 flex flex-col justify-center items-center z-50"
      style={{ backgroundColor: "#72BADB" }}
    >
      {/* Logo in top left */}
      <div className="absolute top-10 left-10">
        <img src="/logo.png" alt="Logo" className="w-52 rounded-xl" />
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h1
          className="text-white text-6xl font-bold tracking-wide drop-shadow-lg uppercase"
          style={{ fontFamily: "Cal Sans, sans-serif" }}
        >
          CyberSecurity Gamified <br />Learning
        </h1>
      </div>

      {/* Progress text */}
      <div className="text-center">
        {/* <div className="text-white text-3xl font-bold tracking-wide mb-2 drop-shadow-lg">
          Loading...
        </div> */}
        <div className="text-white/90 text-xl font-medium">
          {Math.floor(progress)}%
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-white/20 rounded-full mt-6 overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-300 ease-out shadow-sm"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
