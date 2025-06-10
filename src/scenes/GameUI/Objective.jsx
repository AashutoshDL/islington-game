import React from 'react';
import { X, Shield, Brain, Target, Gamepad2, Star, ChevronRight } from 'lucide-react';

const Objective = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-500 rounded-full blur-2xl"></div>
        </div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center pt-8 pb-6 px-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full">
              <Target className="text-white" size={32} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Game Objectives</h1>
          <p className="text-gray-300">Master cybersecurity through interactive learning</p>
        </div>

        {/* Game Blocks */}
        <div className="px-8 pb-8 space-y-6">
          {/* Skill Block */}
          <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-500 p-2 rounded-lg flex-shrink-0">
                <Brain className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-emerald-400 mb-2">Skill Block</h3>
                <h4 className="text-white font-medium mb-2">Cybersecurity Awareness MCQ Game</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Test your knowledge of cybersecurity fundamentals through multiple-choice questions. 
                  Learn about threat detection, security protocols, and best practices to protect digital assets.
                </p>
                <div className="flex items-center text-emerald-400 text-sm font-medium">
                  <Gamepad2 size={16} className="mr-2" />
                  Interactive Learning Experience
                  <ChevronRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Brit Block */}
          <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
                <Shield className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Brit Block</h3>
                <h4 className="text-white font-medium mb-2">Card Flip Match Game</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Enhance your memory and pattern recognition skills by matching cybersecurity terms with their definitions. 
                  Perfect for reinforcing key concepts and terminology in an engaging format.
                </p>
                <div className="flex items-center text-blue-400 text-sm font-medium">
                  <Star size={16} className="mr-2" />
                  Memory & Pattern Recognition
                  <ChevronRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-800/50 px-8 py-4 border-t border-slate-700">
          <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
            <Shield size={16} />
            <span>Educational cybersecurity training games</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;