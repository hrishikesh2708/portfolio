import React from "react";

function Layout({ children, className = "" }) {
  return <div class={`${className} w-full h-full inline-block z-0 p-32`}>{children}</div>;
}

export default Layout;
