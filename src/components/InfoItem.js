import React from "react";

const InfoItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 p-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h4 className="header">{title}</h4>
        <ul className="list-disc pl-5">
          {description.map((point, index) => (
            <li key={index}>
              <h4>{point}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoItem;
