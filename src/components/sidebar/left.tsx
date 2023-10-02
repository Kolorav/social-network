"use client";
import { useState, useEffect } from "react";
import "./style.css";
import { usePathname } from "next/navigation";

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

function LeftBar() {
  // States
  const [dimensions, setDimensions] = useState({
    width: innerWidth,
    height: innerHeight,
  });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener("resize", handleResize, false);
  }, []);

  // States - End

  // Methods

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // Methods - End

  const pathname: string = usePathname();
  const hide: boolean = ["/auth", "/"].includes(pathname);
  return hide || dimensions.width <= 740 ? (
    ""
  ) : (
    <aside className="left-side-bar-section">
      <div className="left-side-bar"></div>
    </aside>
  );
}

export default LeftBar;
