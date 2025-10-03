import { useEffect, useRef } from "react";
import Typed from "typed.js";



export default function HeroTitle() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, 
 {
      strings: [
        "Abu bakar siddik",
        "Frontend Developer",
        "Web Developer",
        "Designer",
        "Freelancer",
      ],
      typeSpeed: 0,      
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      showCursor: false,
      loop: true,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <h3 className="text-xl font-semibold bg-gradient-to-r  from-[#6861e4] to-[#FF7E5F]/70 bg-clip-text text-transparent">
      And I'm a <span className="bg-gradient-to-r  from-[#58bbd2] to-[#FF7E5F]/70 bg-clip-text text-transparent" ref={el}></span>
    </h3>
  );
}
