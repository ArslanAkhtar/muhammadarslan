import React, { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";

interface Props {
  children: React.ReactNode;
}

const Layout: FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      <Header />
      <Menu />
      <div id="page-content-wrapper">{props.children}</div>
    </>
  );
};

export default Layout;
