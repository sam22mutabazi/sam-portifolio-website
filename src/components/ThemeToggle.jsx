/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";

/* simple theme toggle (dark/light) — toggles body data-theme attribute */
function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(()=>{
    const stored = localStorage.getItem("theme");
    if (stored === "light") setLight(true);
    apply(stored === "light");
  },[]);

  function apply(isLight) {
    if(isLight){
      document.documentElement.style.setProperty('--bg','#f6f8fb');
      document.documentElement.style.setProperty('--muted','#475569');
      document.documentElement.style.setProperty('color','black');
      document.body.style.background = "linear-gradient(180deg,#eaf2ff 0%, #f6f8fb 100%)";
    } else {
      document.documentElement.style.removeProperty('--bg');
      document.documentElement.style.removeProperty('--muted');
      document.body.style.background = "linear-gradient(180deg, #071023 0%, #06132a 100%)";
    }
  }

  function toggle() {
    const n = !light;
    setLight(n);
    localStorage.setItem("theme", n ? "light":"dark");
    apply(n);
  }

  return (
    <button 
      onClick={toggle} 
      className="btn btn-outline"
      title="Toggle light / dark"
      style={{padding:"6px 10px", borderRadius:10, fontWeight:700}}
    >
      {light ? "Light" : "Dark"}
    </button>
  );
}
export default ThemeToggle;
