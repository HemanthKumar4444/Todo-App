//rfc
// import React from 'react'

// function Header()
// {
//     return <div></div>;
// }

// export default Header;

//rafc
// import React from "react";

// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//     </header>
//   );
// };

const Header = ({ title}) => {
  return (
    <header>
      <h1>
        {title}
      </h1>
    </header>
  );
};

//setting default values for properties
Header.defaultProps = {
  title: "Todo List",
};
export default Header;
