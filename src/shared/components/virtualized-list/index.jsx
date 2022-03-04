import React, { useMemo } from "react";
import PropTypes from "prop-types";

const VirtualizedList = ({
  loading,
  data,
  contentComponent: Component,
  loadingComponent: LoadingComponent,
}) => {
  const placeHolderData = useMemo(() => new Array(1).fill({}, 0, 1), []);
  const _rowContent = useCallback(
    (index, itemData) => {
      if (loading) {
        return <LoadingComponent key={`${feature}-${index}`} data={itemData} />;
      }
      return <Component data={itemData} />;
    },
    [loading]
  );
  return (
    <Virtuoso
      className="vlist"
      data={loading ? placeHolderData : data}
      // overscan={200}
      itemContent={_rowContent}
    />
  );
};

export default VirtualizedList;
