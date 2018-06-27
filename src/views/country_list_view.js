const PubSub = require('../helpers/pub_sub.js');

const ContinentsListView = function (container) {
  this.container = container;
}

ContinentsListView.prototype.bindEvents = function () {
  PubSub.subscribe('Continents:continents-data-ready', (evt) => {
    this.continents = evt.detail;
    this.populate();
  });
  this.container.addEventListener('change', (evt) => {
  const selectedIndex = evt.target.value;
  PubSub.publish('SelectView:change', selectedIndex);
});
};

ContinentsListView.prototype.populate = function(){
  this.continents.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.container.appendChild(option);
  })
}



module.exports = ContinentsListView;
