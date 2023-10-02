"use client";
import "./style.css";
import { FaCameraRetro } from "react-icons/fa";
import { usePathname } from "next/navigation";

function Topbar() {
  const pathname: string = usePathname();
  const hide: boolean = ["/auth", "/"].includes(pathname);
  return hide ? (
    ""
  ) : (
    <div className="topbar">
      <p className="logo">
        <FaCameraRetro />
      </p>
      <p>Pixels</p>
    </div>
  );
}

export default Topbar;
