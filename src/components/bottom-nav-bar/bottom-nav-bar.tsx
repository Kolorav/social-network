"use client";
import "./style.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PiUploadSimpleLight } from "react-icons/pi";
import { CiSearch, CiStickyNote, CiUser } from "react-icons/ci";
import { usePathname } from "next/navigation";

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

function BottomNavigationBar() {
  const pathname: string = usePathname();
  const hide: boolean = ["/auth", "/"].includes(pathname);

  // States
  const [dimensions, setDimensions] = useState({
    width: innerWidth,
    height: innerHeight,
  });

  useEffect(() => {
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

  const condition = hide || dimensions.width > 740;

  return condition ? (
    ""
  ) : (
    <nav className="bottom-nav-bar">
      <Link href="/feed">
        <CiStickyNote className="w-5 h-5 font-bold" />
      </Link>
      <Link href="/search">
        <CiSearch className="w-5 h-5" />
      </Link>
      <Link href="/post">
        <PiUploadSimpleLight className="w-5 h-5" />
      </Link>
      <Link href="/profile">
        <CiUser className="w-5 h-5" />
      </Link>
    </nav>
  );
}

export default BottomNavigationBar;
