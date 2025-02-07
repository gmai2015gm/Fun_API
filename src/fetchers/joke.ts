import axios from 'axios';

export const getJoke = async (): Promise<string> => {
  const response = await axios
    .get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
    .catch((error) => {
      console.error(error);
      return error;
    });

  return response.data.joke;
};
