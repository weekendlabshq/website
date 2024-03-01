import React, { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const homePage = router.pathname === "/";
  const projectsPage = router.pathname === "/projects";
  const aboutPage = router.pathname === "/about";
  const careersPage = router.pathname === "/careers";

  const [loaded, setLoaded] = useState(false);
  const [backgroundClasses, setBackgroundClasses] = useState(
    `${styles.background} background__initial`
  );

  useEffect(() => {
    setLoaded(true);
    setBackgroundClasses(`${styles.background} background__loaded`);
  }, []);

  const layoutClasses = `${styles.layout} ${
    homePage ? "background__home" : ""
  } ${projectsPage ? "background__projects" : ""} ${
    aboutPage ? "background__about" : ""
  } ${careersPage ? "background__careers" : ""} ${backgroundClasses}`
    .split(" ")
    .filter((c) => c)
    .join(" ")
    .split("undefined")
    .filter((c) => c)
    .join(" ");

  return <div className={layoutClasses}>{children}</div>;
};

export default Layout;
