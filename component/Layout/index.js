import React from "react";
import Navigation from "../Navigation";
import Head from "next/head";
import Link from "next/link";
const index = ({ children }) => {
  return (
    <>
      <Head>
        {/* <!-- Bootstrap core CSS --> */}
        <link
          href="https://getbootstrap.com/docs/4.5/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        />
        {/* <!-- Custom styles for this template --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900"
          rel="stylesheet"
        />
      </Head>

      <Navigation />
      {children}
    </>
  );
};

export default index;
