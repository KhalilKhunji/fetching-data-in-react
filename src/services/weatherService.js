const API_KEY = '<API KEY HERE>';
const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
    try {
      const queryString = `&q=${city}`;
      const res = await fetch(BASE_URL + queryString);
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      };
      const data = await res.json();
      console.log('Data:', data);
      return data;
    } catch (err) {
      console.log(err);
    };
};

export { show };