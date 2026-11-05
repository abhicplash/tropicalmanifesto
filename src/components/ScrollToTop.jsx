
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Allow links like /about#our-team
      const element = document.getElementById(
        decodeURIComponent(hash.slice(1))
      );

      if (element) {
        element.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
