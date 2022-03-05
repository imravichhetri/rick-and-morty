import React from "react";
import PropTypes from "prop-types";

import Select from "@perseus/shared/components/select";
import Info from "@perseus/shared/components/Info";
import VirtualizedList from "@perseus/shared/components/virtualized-list";
import EpisodeItem from "@perseus/shared/components/episode-item";
import LoadingComponent from "@perseus/shared/components/loading-component";

const RickAndMorty = ({
  charactersOptions = [],
  onCharacterSelect = () => {},
  selectedCharacter,
  episodes = [],
  episodeLoading,
}) => {
  console.log(selectedCharacter, "selectedCharacter");
  return (
    <div className="h-full">
      <article className="h-9">
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
        <article className="md:bg-primary-white relative mb-7">
          <VirtualizedList
            style={{ height: "450px" }}
            className="md:mb-[30px]"
            data={episodes}
            contentComponent={EpisodeItem}
            loading={episodeLoading}
            loadingComponent={LoadingComponent}
          />
        </article>
      ) : null}
    </div>
  );
};

RickAndMorty.propTypes = {};

export default RickAndMorty;
