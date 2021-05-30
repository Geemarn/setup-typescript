import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [collapsed, setCollapsed] = useState(false);

  //set collapse if windows inner width is < 1200
  const updateSize = () => {
    setCollapsed((prev) => window.innerWidth <= 1200 && true);
  };
  //runs after react performs all DOM mutation
  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return collapsed;
};

export default useWindowSize;
