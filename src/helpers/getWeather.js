import axios from "axios";

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=4.6097&longitude=-74.0817&current=temperature_2m&timezone=auto&forecast_days=1';

export const getTemperatura = async () => {
  const response = await axios.get(API_URL);
  const newTemperatura = response.data.current.temperature_2m;
  return newTemperatura;
};
