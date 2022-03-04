import React from "react";
import PropTypes from "prop-types";

import Select from "@perseus/shared/components/select";
import Info from "@perseus/shared/components/Info";
import VirtualizedList from "@perseus/shared/components/virtualized-list";
import EpisodeItem from "@perseus/shared/components/episode-item";

const RickAndMorty = ({
  charactersOptions = [],
  onCharacterSelect = () => {},
  selectedCharacter,
  episodes = [],
}) => {
  console.log(selectedCharacter, "selectedCharacter");
  return (
    <div>
      <article>
        <Select
          options={charactersOptions}
          onChange={onCharacterSelect}
          value={selectedCharacter?.id}
          labelKey="name"
          valueKey="id"
        />
      </article>
      {selectedCharacter && (
        <article>
          <Info {...(selectedCharacter || {})} />
        </article>
      )}
      {episodes.length ? (
        <article>
          <VirtualizedList
            data={newsData}
            feature={activeTopic}
            contentComponent={EpisodeItem}
            loading={loading}
            loadingComponent={LoadingComponent}
          />
        </article>
      ) : null}
    </div>
  );
};

RickAndMorty.propTypes = {};

export default RickAndMorty;
