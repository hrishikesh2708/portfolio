import React from "react";
import { LiaCopyrightSolid } from "react-icons/lia";

function Footer() {
  return (
    <div className="flex items-center flex-col text-shade-1 p-6">
      <div className="flex items-center">
        <LiaCopyrightSolid className="stroke-2" />
        <span className="font-light mr-2">Hrishikesh Thakur</span>
        <span>|</span>
        <span className="font-light ml-2">All rights reserved</span>
      </div>
    </div>
  );
}

export default Footer;
