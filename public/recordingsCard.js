(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['recordingsCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"recording-container\">\r\n    <div class=\"recording-info-container\">\r\n        <p class=\"recording\">"
    + alias4(((helper = (helper = helpers.recordingsText || (depth0 != null ? depth0.recordingsText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recordingsText","hash":{},"data":data,"loc":{"start":{"line":3,"column":29},"end":{"line":3,"column":47}}}) : helper)))
    + "</p>\r\n    </div>\r\n    <div class=\"recording-name-container\">\r\n        <label class=\"instrument-name\">"
    + alias4(((helper = (helper = helpers.instrumentName || (depth0 != null ? depth0.instrumentName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instrumentName","hash":{},"data":data,"loc":{"start":{"line":6,"column":39},"end":{"line":6,"column":57}}}) : helper)))
    + "</label>\r\n    </div>\r\n</div>";
},"useData":true});
})();