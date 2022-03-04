import React from "react";
import PropTypes from "prop-types";
import Select from "@perseus/shared/components/select";

const RickAndMorty = ({
  charactersOptions = [],
  onCharacterSelect = () => {},
  selectedCharacter,
}) => {
  return (
    <div>
      <article>
        <Select
          options={charactersOptions}
          onChange={onCharacterSelect}
          value={selectedCharacter}
          labelKey="name"
          valueKey="id"
        />
      </article>
      <article>Character Info</article>
    </div>
  );
};

RickAndMorty.propTypes = {};

export default RickAndMorty;
