var assistingForm = document.querySelector("#attending");
var presentingForm = document.querySelector("#presenting");
var thanksEl = document.querySelector("#thanks");
var errorEl = document.querySelector("#error");

var config = {
  onSubmit: function(event) {
    thanksEl.style.display = "flex";
  },
  onResponse: function(error, response) {
    errorEl.style.display = "flex";
  },
  successTemplate: "<span>Thank you!</span>"
};

Pageclip.form(assistingForm, config);
Pageclip.form(presentingForm, config);