"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaVideo,
  FaDownload,
  FaMicrophone,
  FaMicrophoneSlash,
} from "react-icons/fa";

export default function ScreenRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const handleStartRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing display media:", error);
    }
  }, []);

  const handleStopRecording = useCallback(() => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  }, []);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style.display = "none";
      a.href = url;
      a.download = "recorded-screen.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  useEffect(() => {
    if (recordedChunks.length && !isRecording) {
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      if (videoRef.current) {
        videoRef.current.src = url;
      }
    }
  }, [recordedChunks, isRecording]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white antialiased flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-2">Screen Recorder</h1>
          <p className="text-gray-400">Capture your screen with ease</p>
        </motion.div>

        <div className="flex justify-center">
          <AnimatePresence mode="wait" initial={false}>
            {!isRecording ? (
              <motion.button
                key="start"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartRecording}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold shadow-lg transition duration-300 flex items-center space-x-2"
              >
                <FaMicrophone className="w-5 h-5" />
                <span>Start Recording</span>
              </motion.button>
            ) : (
              <motion.button
                key="stop"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStopRecording}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold shadow-lg transition duration-300 flex items-center space-x-2"
              >
                <FaMicrophoneSlash className="w-5 h-5" />
                <span>Stop Recording</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {recordedChunks.length > 0 && !isRecording && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="space-y-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg transition duration-300 w-full flex items-center justify-center space-x-2"
              >
                <FaDownload className="w-5 h-5" />
                <span>Download Recording</span>
              </motion.button>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-xl bg-gray-800"
              >
                <video
                  ref={videoRef}
                  controls
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 rounded-full p-2">
                  <FaVideo className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
