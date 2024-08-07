import React from "react";

function ButtonGroups({ buttons, isSelected, setSelected }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", width:'100%' }}>
      {buttons.map((text, index) => {
        return (
          <button
            className={
              isSelected === index ? "side-button-orange" : "side-button-grey"
            }
            onClick={() => {
              setSelected(index);
            }}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonGroups;
