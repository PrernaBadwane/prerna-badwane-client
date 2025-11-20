import { useState, useEffect } from "react";

export const useIsBelowMD = () => {
  const [isBelowMD, setIsBelowMD] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsBelowMD(window.innerWidth < 768); // Tailwind md = 768px
    };

    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isBelowMD;
};
