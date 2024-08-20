import { useState } from "react";

export const useDownloadCV = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleDownload = () => setShowOptions(true);

  const downloadFile = (language: string) => {
    const link = document.createElement("a");
    link.href =
      language === "es" ? "/KevinOcampoESP.pdf" : "/KevinOcampoEN.pdf";
    link.download =
      language === "es" ? "KevinOcampoESP.pdf" : "KevinOcampoEN.pdf";
    link.click();
    setShowOptions(false);
  };

  return {
    showOptions,
    handleDownload,
    downloadFile,
    closeOptions: () => setShowOptions(false),
  };
};
