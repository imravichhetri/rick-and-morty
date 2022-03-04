import React from "react";
import PropTypes from "prop-types";

const LoadingComponent = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={600}
      height={160}
      viewBox="0 0 600 160"
      backgroundColor="#f2f2f2"
      foregroundColor="#d1d1d1"
      {...props}
    >
      <rect x="10" y="7" rx="3" ry="3" width="77" height="6" />
      <rect x="13" y="20" rx="0" ry="0" width="60" height="7" />
      <rect x="442" y="12" rx="0" ry="0" width="124" height="8" />
    </ContentLoader>
  );
};

LoadingComponent.propTypes = {};

export default LoadingComponent;
