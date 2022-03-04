import React from "react";
import PropTypes from "prop-types";

const meta = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "species",
    label: "Species",
  },
  {
    key: "gender",
    label: "Gender",
  },
  {
    key: "origin",
    label: "Origin",
    renderer: (datum) => datum.name,
  },
  {
    key: "location",
    label: "Location",
    renderer: (datum) => datum.name,
  },
  // {
  //   key: "image",
  //   label: "Image",
  // },
  {
    key: "episode",
    label: "Episode",
    renderer: (datum) => datum.length,
  },
];
const Info = (props) => {
  return (
    <div className="grid grid-cols-3 gap-4  md:grid-cols-1 my-5 px-2">
      <div className="grid grid-cols-3 gap-4 col-span-2">
        {meta.map(({ key, renderer, label }) => (
          <div key={key}>
            <h5 className="text-sm font-medium">{label}</h5>
            <div className="font-semibold">
              {renderer ? renderer(props[key], props) : props[key]}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <img
          src={props.image}
          alt="Character Image"
          className="h-48 object-cover w-100"
        />
      </div>
    </div>
  );
};

Info.propTypes = {};

export default Info;
