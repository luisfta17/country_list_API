const PubSub = require('../helpers/pub_sub.js');

const CountriesInfoView = function(container){
  this.container = container;
};

CountriesInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:selected-country-ready', (evt) => {
    const country = evt.detail;
    console.log(country);
    this.render(country);
  });
};

CountriesInfoView.prototype.render = function(country){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = country.name;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
  const regionParagraph = document.createElement('p');
  regionParagraph.textContent = country.region;
  this.container.appendChild(regionParagraph);
};

module.exports = CountriesInfoView;
