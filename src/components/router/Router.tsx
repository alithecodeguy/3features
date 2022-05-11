//library
import { useCallback, useState, useEffect, useMemo, ReactNode } from "react";

import RouterContext from "../../contexts/RouterContext";

import matchRoutes from "../../functions/matchRoutes";

import useDidMountEffect from "../../hooks/useDidMountEffect";

type Props = {
  children: ReactNode;
};

export default function Router({ children }: Props) {
  const [location, setLocation] = useState(window.location.pathname);
  const [isAnimationRunning, setIsAnimationRunning] = useState(0);

  const handlePush = useCallback((newLocation: string) => {
    window.history.pushState({}, "", newLocation);
    setLocation(newLocation);
  }, []);

  const handlePop = useCallback(() => {
    setLocation(window.location.pathname);
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, [handlePop]);

  const value = useMemo(() => {
    return { location, push: handlePush };
  }, [location, handlePush]);

  const match = useMemo(
    () => matchRoutes(children, location),
    [children, location]
  );

  return (
    <RouterContext.Provider value={{ ...value }}>
      {match.route}
    </RouterContext.Provider>
  );
}
