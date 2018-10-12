let controller;
export const search = query => {
  controller = new AbortController();
  const signal = controller.signal;

  return fetch(
    `http://localhost:5000/search?query=${query}`,
    {
      method: 'get',
      signal,
    },
  ).then(response => {
    controller = undefined;
    return response.text();
  });
};

export const searchAbort = () => {
  if (controller) controller.abort();
};

export const getXkcdImage = () =>
  fetch(`http://localhost:5000/xkcd`).then(response =>
    response.json(),
  );

export const sendReport = () => {};
