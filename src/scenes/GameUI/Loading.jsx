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
          CyberSecurity Gamified <br /> Learning
        </h1>
      </div>

      {/* Progress text */}
      <div className="text-center">
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

      {/* Footer text at bottom center */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <div className="bg-black/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium border border-white/10">
          © ING Skill Academy — SMARC
        </div>
      </div>
    </div>
  );
};

export default Loading;