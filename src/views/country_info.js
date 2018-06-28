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

CountriesInfoView.prototype.createList = function () {
 return document.createElement('ul');
};

CountriesInfoView.prototype.populateList = function (list, data) {
  data.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item.name;
    list.appendChild(listItem);
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
  const language = document.createElement('p');
  language.textContent = "Languages:";
  this.container.appendChild(language);
  const borderList = this.createList();
  this.populateList(borderList, country.languages)
  this.container.appendChild(borderList);
};







module.exports = CountriesInfoView;
