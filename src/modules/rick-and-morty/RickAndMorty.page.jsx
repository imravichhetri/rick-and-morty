import React, { useCallback, useContext, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import RickAndMortyTemplate from "./RickAndMorty.template";
import {
  useGetAllCharacters,
  useGetEpisodesByNumbers,
} from "./RickAndMorty.data";
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
  const episodes = useMemo(() => {
    console.log(selectedCharacter, "selectedCharacter");
    return (selectedCharacter?.episode ?? []).map((episode = "") =>
      episode.substr(episode.lastIndexOf("/") + 1)
    );
  }, [selectedCharacter]);
  const {
    episodesList = [],
    episodesListLoading,
    episodesListError,
    episodesListSuccess,
  } = useGetEpisodesByNumbers(episodes);
  console.log(
    episodesList,
    episodes,
    selectedCharacter,
    characterId,
    "allCharacters"
  );
  const _onChange = useCallback((data) => {
    console.log(data, "data-----");
    dispatch({ type: appStateActions.SET_CHARACTER_DETAIL, payload: data });
    if (data?.id) {
      push(`/rick-and-morty/characters/${data.id}`);
    } else {
      push(`/rick-and-morty/characters`);
    }
  }, []);

  useEffect(() => {
    if (characterId && !selectedCharacter && allCharacters.length) {
      const character = allCharacters.find((char) => char.id === +characterId);
      dispatch({
        type: appStateActions.SET_CHARACTER_DETAIL,
        payload: character,
      });
    }
  }, [selectedCharacter, characterId, allCharacters]);

  return (
    <RickAndMortyTemplate
      charactersOptions={allCharacters}
      onCharacterSelect={_onChange}
      selectedCharacter={selectedCharacter}
      episodes={Array.isArray(episodesList) ? episodesList : [episodesList]}
      episodeLoading={episodesListLoading}
    />
  );
};

RickAndMorty.propTypes = {};

export default RickAndMorty;
