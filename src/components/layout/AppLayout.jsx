import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import MobileNavigationBar from "components/mobile-navigation/MobileNavigationBar";
import Sticky from "components/sticky/Sticky";
import Topbar from "components/topbar/Topbar";
import Head from "next/head";
import React, { Fragment, useCallback, useState } from "react";

const AppLayout = ({
  children,
  navbar,
  title = "React Next.js Ecommerce Template"
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback(fixed => {
    setIsFixed(fixed);
  }, []);
  return <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Topbar />

      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <Header isFixed={isFixed} />
      </Sticky>

      {navbar && <div className="section-after-sticky">{navbar}</div>}
      {!navbar ? <div className="section-after-sticky">{children}</div> : children}

      <MobileNavigationBar />
      <Footer />
    </Fragment>;
};

export default AppLayout;