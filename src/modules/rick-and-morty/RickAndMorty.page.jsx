import React, { useContext } from "react";
import PropTypes from "prop-types";

import RickAndMortyTemplate from "./RickAndMorty.template";
import { useGetAllCharacters } from "./RickAndMorty.data";
import { ApplicationContext } from "@perseus/shared/contexts/application";
import appStateActions from "@perseus/shared/constants/app-state-actions";

const RickAndMorty = (props) => {
  const {
    appState: { selectedCharacter },
    dispatch,
  } = useContext(ApplicationContext);
  const {
    allCharacters = [],
    allCharactersLoading,
    allCharactersError,
    allCharactersSuccess,
  } = useGetAllCharacters();
  console.log(allCharacters, selectedCharacter, "allCharacters");
  const _onChange = (data) => {
    console.log(data, "args");
    dispatch({ type: appStateActions.SET_CHARACTER, payload: data });
  };
  return (
    <div>
      <RickAndMortyTemplate
        charactersOptions={allCharacters}
        onCharacterSelect={_onChange}
        selectedCharacter={selectedCharacter?.id}
      />
    </div>
  );
};

RickAndMorty.propTypes = {};

export default RickAndMorty;
