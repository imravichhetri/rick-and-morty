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
  return (
    <div className="h-full">
      <article className="h-9">
        <Select
          className="cursor-pointer"
          options={charactersOptions}
          onChange={onCharacterSelect}
          value={selectedCharacter?.id}
          labelKey="name"
          valueKey="id"
          placeholder="Search or Select any character"
          aria-label="Search or Select any character"
        />
      </article>
      {selectedCharacter && (
        <article>
          <Info {...(selectedCharacter || {})} />
        </article>
      )}
      {selectedCharacter && episodes.length ? (
        <article className="relative mb-7">
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
