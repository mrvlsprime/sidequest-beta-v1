"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, CheckCircle2, UserPlus, Play, Navigation } from 'lucide-react';

export default function Home() {
  const [step, setStep] = useState('idle'); // idle, active, completed, friend

  return (
    <main className="p-6 h-full flex flex-col">
      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-tighter text-white uppercase italic">SIDEQUEST</h1>
        <p className="text-slate-400 text-sm">Stealth Beta v1.0</p>
      </header>

      <AnimatePresence mode="wait">
        {step === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <MapPin className="text-blue-400 w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-blue-400 border border-blue-400/30 px-2 py-1 rounded">150 XP</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Find the Hidden Coffee Spot</h2>
              <p className="text-slate-400 text-sm mb-6">Locate the secret entrance at the back of the alleyway in the Arts District.</p>
              
              <button 
                onClick={() => setStep('active')}
                className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
              >
                <Play className="w-4 h-4 fill-black" />
                Start Quest
              </button>
            </div>
          </motion.div>
        )}

        {step === 'active' && (
          <motion.div
            key="active"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="flex-1 flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 py-12">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                <Navigation className="w-24 h-24 text-blue-400 animate-pulse relative z-10" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">Quest In Progress</h2>
                <p className="text-slate-400">Head 200m North-West to the objective</p>
              </div>
              
              <div className="w-full space-y-3">
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-blue-500"
                    initial={{ width: "10%" }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2 }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>START</span>
                  <span>75% COMPLETE</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setStep('completed')}
              className="w-full py-4 bg-emerald-500 text-white font-bold rounded-xl flex items-center justify-center gap-2"
            >
              Check In at Location
            </button>
          </motion.div>
        )}

        {step === 'completed' && (
          <motion.div
            key="completed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 flex flex-col items-center justify-center text-center p-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12 }}
              className="mb-6 p-4 bg-emerald-500/20 rounded-full"
            >
              <CheckCircle2 className="w-20 h-20 text-emerald-400" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-2">Quest Complete!</h2>
            <p className="text-emerald-400 font-mono mb-8">+150 XP EARNED</p>
            
            <button 
              onClick={() => setStep('friend')}
              className="w-full py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              Share Achievement
            </button>
          </motion.div>
        )}

        {step === 'friend' && (
          <motion.div
            key="friend"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 flex flex-col"
          >
            <div className="flex-1 space-y-6">
              <h2 className="text-xl font-bold text-white">Add to Your Squad</h2>
              <div className="space-y-3">
                {[
                  { name: 'Alex Rivera', handle: '@arivera' },
                  { name: 'Jordan Smith', handle: '@jsmith_99' },
                  { name: 'Sarah Chen', handle: '@schen_dev' }
                ].map((friend) => (
                  <div key={friend.handle} className="flex items-center justify-between p-4 bg-slate-900/80 border border-slate-800 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
                      <div>
                        <p className="font-bold text-sm text-white">{friend.name}</p>
                        <p className="text-xs text-slate-500">{friend.handle}</p>
                      </div>
                    </div>
                    <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 text-white">
                      <UserPlus className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => setStep('idle')}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl"
            >
              Back to Home
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
