import React, { useCallback, useContext, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import RickAndMortyTemplate from "./RickAndMorty.template";
import {
  useGetAllCharacters,
  useGetEpisodesByNumbers,
} from "./RickAndMorty.data";
import { ApplicationContext } from "@perseus/shared/contexts/application";
import appStateActions from "@perseus/shared/constants/app-state-actions";
import strings from "@perseus/shared/constants/strings";

const RickAndMorty = (props) => {
  const { addToast } = useToasts();
  const { appState, dispatch } = useContext(ApplicationContext);
  const { selectedCharacter } = appState;
  const { push } = useHistory();
  const { characterId } = useParams();
  const {
    allCharacters = [],
    allCharactersLoading,
    allCharactersError,
    allCharactersSuccess,
  } = useGetAllCharacters();
  const episodes = useMemo(() => {
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
  const _onChange = useCallback((data) => {
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

  useEffect(() => {
    if (allCharactersError) {
      console.log(allCharactersError, "allCharactersError");
      addToast(allCharactersError?.message ?? strings.ERROR_MESSAGE, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }, [allCharactersError]);
  useEffect(() => {
    if (episodesListError) {
      addToast(episodesListError?.message ?? strings.ERROR_MESSAGE, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }, [episodesListError]);
  return (
    <RickAndMortyTemplate
      charactersOptions={allCharacters}
      onCharacterSelect={_onChange}
      selectedCharacter={selectedCharacter}
      episodes={Array.isArray(episodesList) ? episodesList : [episodesList]}
      episodeLoading={episodesListLoading}
      open={open}
    />
  );
};

RickAndMorty.propTypes = {};

export default RickAndMorty;
