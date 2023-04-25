const weatherCodes = new Map();

weatherCodes.set(0, 'icon-clear-sky');
weatherCodes.set(1, 'icon-partly-cloudy');
weatherCodes.set(2, 'icon-partly-cloudy');
weatherCodes.set(3, 'icon-partly-cloudy');
weatherCodes.set(45, 'icon-fog');
weatherCodes.set(48, 'icon-fog');
weatherCodes.set(51, 'icon-drizzle');
weatherCodes.set(53, 'icon-drizzle');
weatherCodes.set(55, 'icon-drizzle');
weatherCodes.set(56, 'icon-freezing-drizzle');
weatherCodes.set(61, 'icon-rain');
weatherCodes.set(63, 'icon-rain');
weatherCodes.set(65, 'icon-rain');
weatherCodes.set(66, 'icon-freezing-rain');
weatherCodes.set(67, 'icon-freezing-rain');
weatherCodes.set(71, 'icon-snow-fall');
weatherCodes.set(73, 'icon-snow-fall');
weatherCodes.set(75, 'icon-snow-fall');
weatherCodes.set(77, 'icon-snow-grains');
weatherCodes.set(80, 'icon-rain-showers');
weatherCodes.set(81, 'icon-rain-showers');
weatherCodes.set(82, 'icon-rain-showers');
weatherCodes.set(85, 'icon-snow-showers');
weatherCodes.set(86, 'icon-snow-showers');
weatherCodes.set(95, 'icon-thunderstorm');
weatherCodes.set(96, 'icon-thunderstorm');
weatherCodes.set(99, 'icon-thunderstorm-heavy-hail');

export default {
  randomUserApiUrl: 'https://randomuser.me/api/',
  weatherApiUrl: 'https://api.open-meteo.com/v1/',
  weatherCodes,
}
