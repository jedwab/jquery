var span = $("span");
var ignored = ["1", "2","3"];

span.each(function(index, element) {
  var idList = element.getAttribute("id");

  if (ignored.indexOf(idList) === -1) {
        $(element).css("color", "red");
      }
});

var paragraphs = $('p');
paragraphs.each(function(index, element) {

    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
    $(element).append(button)

});

$("button").click(function(){
  alert($(this).attr("data-tmp"));
});