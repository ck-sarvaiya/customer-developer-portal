import React from "react";

export const Accordion = ({ title, childrens ,setSelected, selected}) => {
  const [isOpen, setOpen] = React.useState(false);
  console.log(childrens, "childrens");
  return (
    <div className="accordion-wrapper" onClick={setSelected("selected")}>
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">
          {childrens.map((item) => (
            <div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
