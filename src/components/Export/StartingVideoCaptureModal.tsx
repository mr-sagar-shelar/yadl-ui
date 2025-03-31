import { useEffect, useState } from "react";

const StartingVideoCaptureModal = () => {
  const [currentCount, setCurrentCount] = useState(3);

  useEffect(() => {
    if (currentCount >= 0) {
      setTimeout(() => {
        setCurrentCount(currentCount - 1);
      }, 1000);
    }
  }, [currentCount]);
  return (
    <>
      <div
        className="overflow-auto w-full h-full fixed inset-0 z-10 flex items-center justify-center bg-gray-700"
        x-show="showModal"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="font-mono text-6xl text-error">
            <span aria-live="polite">{currentCount}</span>
          </div>
          <div className="font-mono text-error/50">
            Press <kbd className="kbd kbd-sm">S</kbd> to stop recording.
          </div>
        </div>
      </div>
    </>
  );
};

export default StartingVideoCaptureModal;
