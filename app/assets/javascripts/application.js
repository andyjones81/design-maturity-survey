//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//




window.GOVUKPrototypeKit.documentReady(() => {


AutoComplete({
  containerId: 'autocomplete-container',
  formId: 'search',
  inputId: 'search-field',
  onConfirm,
  source,
  templates: {
    inputValue,
    suggestion,
  },
});
MenuToggle();
SearchToggle();
Details();
SkipLink();
Checkboxes();
Radios();
Card();


// Design examples
document.querySelectorAll(DesignExample.selector()).forEach((el) => {
  new DesignExample(el);
});



  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '');

})


