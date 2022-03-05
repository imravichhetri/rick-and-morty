import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Virtuoso } from "react-virtuoso";

const VirtualizedList = ({
  loading,
  data,
  contentComponent: Component,
  loadingComponent: LoadingComponent,
  className,
  style,
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
      style={style}
      data={loading ? placeHolderData : data}
      // overscan={200}
      itemContent={_rowContent}
      totalCount={data?.length ?? 0}
      role="list"
    />
  );
};

export default VirtualizedList;
