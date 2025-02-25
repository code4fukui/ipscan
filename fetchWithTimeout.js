export const fetchWithTimeout = async (url, options = {}) => { // support timeout msec
  const timeout = options.timeout;
  if (!timeout) {
    return fetch(url, options);
  }
  const controller = new AbortController();
  options.signal = controller.signal;
  
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  return fetch(url, options)
    .then(response => {
      clearTimeout(timeoutId);
      return response;
    })
    .catch(error => {
      clearTimeout(timeoutId);
      throw error;
    }
  );
};
