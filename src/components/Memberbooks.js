import React from "react";

const Memberbooks = ({ mybooks }) => {
  const Books = mybooks;
  return (
    <div>
      <span className="activeTime" style={{ color: "red" }}>
        Borrowed Books
      </span>
      <ol>
        {Books.map((mybooks) => (
          <span className="activeTime">
            <li>{mybooks}</li>
          </span>
        ))}
      </ol>
    </div>
  );
};
export default Memberbooks;
