import React from "react";

const Footer = ({ length }) => {
  let getYear = () => new Date().getFullYear();
  return (
    <footer>
      <h4>
        {length
          ? `Number of Tasks To Be Completed: ${length}`
          : `All Tasks Are Completed`}
      </h4>
      <h4>Copyright &copy; {getYear()}. All Rights Reserved!</h4>
    </footer>
  );
};

export default Footer;
