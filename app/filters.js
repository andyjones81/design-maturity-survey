const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter


addFilter('split', function(str, seperator) {
    return str.split(seperator);
});