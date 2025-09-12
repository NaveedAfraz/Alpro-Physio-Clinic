import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change to 'auto' if you prefer instant scroll
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
