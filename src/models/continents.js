const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Continents = function () {
  this.continents = [];
};

Continents.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');
  requestHelper.get((data) => {
    this.continents = data;
    // this.handleDataReady(data);
    PubSub.publish('Continents:continents-data-ready', this.continents);
    PubSub.subscribe('SelectView:change', (evt) => {
      const selectedIndex = evt.detail;
      this.publishCountryDetail(selectedIndex);
    });
  });
};

Continents.prototype.publishCountryDetail = function(selectedIndex){
  const selectedCountry = this.continents[selectedIndex];
  PubSub.publish('Countries:selected-country-ready', selectedCountry);
};


module.exports = Continents;
