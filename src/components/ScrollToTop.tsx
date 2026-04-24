import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets window scroll to the top whenever the route pathname changes.
 * Hash-only changes (e.g. "#contact") are intentionally ignored so in-page
 * anchor links continue to work.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
