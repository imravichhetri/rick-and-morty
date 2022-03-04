import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";

import RickAndMortyTemplate from "./RickAndMorty.template";
import { useGetAllCharacters } from "./RickAndMorty.data";
import { ApplicationContext } from "@perseus/shared/contexts/application";
import appStateActions from "@perseus/shared/constants/app-state-actions";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const RickAndMorty = (props) => {
  const {
    appState: { selectedCharacter },
    dispatch,
  } = useContext(ApplicationContext);
  const { push } = useHistory();
  const { characterId } = useParams();
  const {
    allCharacters = [],
    allCharactersLoading,
    allCharactersError,
    allCharactersSuccess,
  } = useGetAllCharacters();
  console.log(allCharacters, selectedCharacter, characterId, "allCharacters");
  const _onChange = (data) => {
    dispatch({ type: appStateActions.SET_CHARACTER_DETAIL, payload: data });
    push(`/rick-and-morty/characters/${data.id}`);
  };

  useEffect(() => {
    if (characterId && !selectedCharacter && allCharacters.length) {
      const character = allCharacters.find((char) => char.id === +characterId);
      console.log(character, allCharacters, characterId, "character");
      dispatch({
        type: appStateActions.SET_CHARACTER_DETAIL,
        payload: character,
      });
    }
  }, [selectedCharacter, characterId, allCharacters]);
  return (
    <div>
      <RickAndMortyTemplate
        charactersOptions={allCharacters}
        onCharacterSelect={_onChange}
        selectedCharacter={selectedCharacter}
      />
    </div>
  );
};

RickAndMorty.propTypes = {};

export default RickAndMorty;
