const CURRENCIES_API = 'https://economia.awesomeapi.com.br/json/all';

const chamaFetch = async () => {
  const apiResponse = await fetch(CURRENCIES_API);
  const json = await apiResponse.json();

  return apiResponse.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default chamaFetch;
