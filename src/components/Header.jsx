import React from "react";

const Header = ({ text }) => {
  return (
    <>
      <div className="mt-4 text-center">
        <h3>{text}</h3>
        <h5>Categories</h5>
      </div>
    </>
  );
};

export default Header;
