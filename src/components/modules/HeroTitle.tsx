import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function HeroTitle() {
  const el = useRef(null);
 
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typedInstance.current = new Typed(el.current, {
        strings: [
          "Abu Bakar Siddik",
          "Frontend Developer",
          "Web Developer",
          "Designer",
          "Freelancer",
        ],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 500,
        showCursor: false,
        loop: true,
      });
    }

    return () => {
      // cleanup করার আগে চেক করবো instance আছে কিনা
      if (typedInstance.current) {
        typedInstance.current.destroy();
        typedInstance.current = null;
      }
    };
  }, []);

  return (
    <h3 className="text-xl font-semibold bg-gradient-to-r from-[#6861e4] to-[#FF7E5F]/70 bg-clip-text text-transparent">
      And I'm a{" "}
      <span
        className="bg-gradient-to-r from-[#58bbd2] to-[#FF7E5F]/70 bg-clip-text text-transparent"
        ref={el}
      ></span>
    </h3>
  );
}
