import React from "react";
import PropTypes from "prop-types";

const EpisodeItem = ({ data }) => {
  return (
    <div
      key={data.id}
      className="flex h-20 border-b border-stone-color px-2 hover:bg-primary-white cursor-pointer"
      role="listitem"
    >
      <div className="flex flex-col flex-1 justify-center">
        <div>{data?.name ?? ""}</div>
        <div>{data?.episode ?? ""}</div>
      </div>
      <div className="flex items-center">{data?.air_date ?? ""}</div>
    </div>
  );
};

EpisodeItem.propTypes = {};

export default EpisodeItem;
