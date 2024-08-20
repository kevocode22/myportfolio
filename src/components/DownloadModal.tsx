import React, { useRef } from "react";
import Button from "./Button";

interface DownloadModalProps {
  onDownload: (language: string) => void;
  onCancel: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({
  onDownload,
  onCancel,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onCancel();
    }
  };

  return (
    <div
      className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white p-4 rounded shadow-md w-max"
        onClick={(e) => e.stopPropagation()} // Prevents click events from bubbling to the backdrop
      >
        <p className="mb-4 text-base">Select the language:</p>
        <div className="flex flex-col gap-y-4 justify-center text-center items-center">
          <Button
            onClick={() => onDownload("es")}
            className="m-2 bg-black text-white"
          >
            Spanish
          </Button>
          <Button
            onClick={() => onDownload("en")}
            className="m-2 bg-black text-white"
          >
            English
          </Button>
          <button
            onClick={onCancel}
            className="m-2 bg-red-500 text-white text-sm hover:bg-red-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
