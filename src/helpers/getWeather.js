import axios from "axios";

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=4.6097&longitude=-74.0817&hourly=temperature_2m&timezone=auto';

export const getTemperatura = async () => {
  const response = await axios.get(API_URL);
  const newTemperatura = response.data.hourly.temperature_2m[0];
  return newTemperatura;
};
