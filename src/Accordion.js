import React from "react";
import { useState } from "react";

const Accordion = ({ sections }) => {
  const [openSections, setOpenSections] = useState(new Set());

  return (
    <div className="accordion">
      {sections.map(({ value, title, contents }) => {
        const isExpanded = openSections.has(value);
        return (
          <div className="accordion-item" key={value}>
            <button
              type="button"
              className="accordion-title"
              onClick={() => {
                const newOpenSections = new Set(openSections);
                newOpenSections.has(value)
                  ? newOpenSections.delete(value)
                  : newOpenSections.add(value);
                setOpenSections(newOpenSections);
              }}
            >
              {title}
              <span
                aria-hidden={true}
                className={
                  isExpanded
                    ? "accordion-icon accordion-icon--rotated"
                    : "accordion-icon"
                }
              ></span>
            </button>
            <div className="accordion-item-contents" hidden={!isExpanded}>
              {contents}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
