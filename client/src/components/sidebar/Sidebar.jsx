import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">OUR GOAL</span>
        <img
          src="https://ctl.s6img.com/society6/img/_VnAnNCLZwfM7IZkKoTLw7fv_M4/w_1500/posters/top/~artwork,fw_2718,fh_3619,fx_-1780,iw_5427,ih_3618/s6-0070/a/28711731_1967197/~~/lets-go-on-an-adventure-oig-posters.jpg"
          alt=""
        />
        <p>
          We love to travel so our goal is to provide a platform for travelers
          to share their adventures!
        </p>
      </div>
    </div>
  );
}
