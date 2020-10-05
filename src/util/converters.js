export const convertMpsToKph = (distance) => {
  return Math.round(distance * 3.6);
};

export const convertKelvinToCelsius = (temperature) => {
  return Math.round(temperature - 273.15);
};
