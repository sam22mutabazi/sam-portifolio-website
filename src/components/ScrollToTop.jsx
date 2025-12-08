import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
function ScrollToTop(){
  const [show, setShow] = useState(false);
  useEffect(()=>{
    function onScroll(){ setShow(window.scrollY > 300); }
    window.addEventListener("scroll", onScroll);
    return ()=> window.removeEventListener("scroll", onScroll);
  },[]);
  return show ? (
    <button
      className="scroll-top"
      onClick={()=> window.scrollTo({top:0, behavior:"smooth"})}
      aria-label="Scroll to top"
    >
      <FaChevronUp />
    </button>
  ) : null;
}

export default ScrollToTop