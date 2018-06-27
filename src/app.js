const Continents = require('./models/continents.js');
const ContinentListView = require('./views/country_list_view.js');
const CountriesInfoView = require('./views/country_info.js');

document.addEventListener('DOMContentLoaded', () => {
  const continentsListContainer = document.querySelector('#countries');
  const countryData = document.querySelector('#country');

  const continentsListView = new ContinentListView(continentsListContainer);
  continentsListView.bindEvents();

  const countryInfo = new CountriesInfoView(countryData);
  countryInfo.bindEvents();

  const continents = new Continents();
  continents.getData();
});
