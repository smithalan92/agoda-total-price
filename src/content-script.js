
import utils from './utils';

const { stayLength, currency } = utils.getBaseAgodaData();

const run = () => {
  const priceElements = Array.from(document.getElementsByClassName('price-box__price__amount'));
  const mapPriceElements = Array.from(document.getElementsByClassName('mapsPropertyCard-item-price'));
  const mapMarkerElements = Array
    .from(document.getElementsByClassName('propertyMarkerIcon-content'))
    .filter((el) => !el.parentElement.getAttribute('hasProcessed'));

  if (priceElements.length) {
    utils.updateElements({
      elements: priceElements,
      currency,
      stayLength,
      type: 'main',
    });
  }

  if (mapPriceElements.length) {
    utils.updateElements({
      elements: mapPriceElements,
      currency,
      stayLength,
      type: 'map',
    });
  }

  if (mapMarkerElements.length) {
    utils.updateElements({
      elements: mapMarkerElements,
      currency,
      stayLength,
      type: 'mapMarker',
    });
  }
};

const elementToObserve = document.getElementsByTagName('body')[0];

new MutationObserver(run).observe(elementToObserve, {
  attributes: false,
  childList: true,
  subtree: true,
});
