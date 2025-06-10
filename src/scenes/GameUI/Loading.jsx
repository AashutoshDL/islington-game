import { useProgress } from "@react-three/drei";

const Loading = () => {
  const { progress } = useProgress();

  return (
    <div
      className="fixed inset-0 flex flex-col justify-center items-center z-50"
      style={{ backgroundColor: "#72BADB" }}
    >
      {/* Logo in top left */}
      <div className="absolute top-10 left-10 animate-fade-in">
        <img src="/logo.png" alt="Logo" className="w-52 rounded-xl" />
      </div>

      {/* Title */}
      <div className="text-center mb-8 animate-slide-up">
        <h1
          className="text-white text-6xl font-bold tracking-wide drop-shadow-lg uppercase animate-pulse-slow"
          style={{ fontFamily: "Cal Sans, sans-serif" }}
        >
          CyberSecurity Gamified <br /> Learning
        </h1>
      </div>

      {/* Progress text */}
      <div className="text-center animate-fade-in-delay">
        <div className="text-white/90 text-xl font-medium">
          {Math.floor(progress)}%
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-white/20 rounded-full mt-6 overflow-hidden animate-fade-in-delay">
        <div
          className="h-full bg-white rounded-full transition-all duration-300 ease-out shadow-sm animate-shimmer"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Footer text at bottom center */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-fade-in-slow">
        <div className="bg-black/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium border border-white/10">
          © ING Skill Academy — SMARC
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.95; }
        }

        @keyframes shimmer {
          0% { box-shadow: 0 0 0 rgba(255, 255, 255, 0.3); }
          50% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); }
          100% { box-shadow: 0 0 0 rgba(255, 255, 255, 0.3); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        .animate-fade-in-delay {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.3s forwards;
        }

        .animate-fade-in-slow {
          opacity: 0;
          animation: fadeIn 1.2s ease-out 0.6s forwards;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;