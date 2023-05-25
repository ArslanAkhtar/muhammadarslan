import React, { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

const Layout: FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      <Header />
      <Menu />
      <div className="page-content-wrapper">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
