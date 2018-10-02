const showUrls = {
  house: ' http://api.tvmaze.com/shows/118',
  santaBarbara: ' http://api.tvmaze.com/shows/5909',
  bigBang: ' http://api.tvmaze.com/shows/66'
};

export const getShowInfo = showName => {
  const serialUrl = showUrls[showName];
  if (serialUrl == null) {
    throw new Error(
      'The name of the show must be specified[house, santaBarbara, bigBang]'
    );
  }

  return fetch(serialUrl).then(response => {
    if (response.status !== 200) {
      return response
    } else {
      return response.json()
    }
  });
};
