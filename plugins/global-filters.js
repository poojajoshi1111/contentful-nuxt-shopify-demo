import Vue from 'vue';
/**
 * Register Vue Filters
 */
Vue.filter('currency', formatCurrency);

function formatCurrency(price, decimalPlace) {
  if (price && decimalPlace) {
    return `$${new Intl.NumberFormat('en', {
      minimumFractionDigits: decimalPlace,
      maximumFractionDigits: decimalPlace,
    }).format(price)}`;
  }
  if (price) {
    return `$${new Intl.NumberFormat().format(price)}`;
  }
  return '';
}
