import React from "react";
import getIcon from "../misc/getIcon";

export default function Detail({ text, icon }) {
  return (
    <p className="flex items-center mx-auto">
      <svg className="mr-2 w-5 h-5 fill-current">
        <use href={getIcon(icon)}></use>
      </svg>
      {text}
    </p>
  );
}
