"use client";
import "./style.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

function RightBar() {
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
  return hide || dimensions.width <= 1050 ? (
    ""
  ) : (
    <aside className="right-side-bar-section">
      <div className="right-side-bar"></div>
    </aside>
  );
}

export default RightBar;
