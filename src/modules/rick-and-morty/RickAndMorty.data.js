import config, { endpoints } from "@perseus/shared/config";
import fetcher from "@perseus/shared/lib/fetcher";
import { useQuery } from "react-query";

const getAllCharacters = () => {
  try{
    return fetcher(`${endpoints.characters}`).then(data=>data?.results??[]);
  } catch(e) {
    console.error(e,'error occured')
    return Error({message: e?.message??'Oops...Something went wrong!'});
  }
}
export const useGetAllCharacters = () =>{
  const {
    data: allCharacters,
    isLoading: allCharactersLoading,
    isError: allCharactersError,
    isSuccess: allCharactersSuccess,
  } = useQuery(
    'allCharacters',
    () => getAllCharacters(),
    {
      refetchInterval: config.charactersRefetchTime
    }
  );

  return {
    allCharacters,
    allCharactersLoading,
    allCharactersError,
    allCharactersSuccess,
  };
}
