var pull_data = document.getElementById("pull_data");
var subject;

//get data


window.addEventListener("load", function(){
//get data
$.get("https://jsonstorage.net/api/items/22738f45-0838-4697-b7a6-f5d0dc99acd6",
function(data, textStatus, jqXHR){

var index = 0;

//itterate data[] and run myFunction
data.forEach(myFunction);


function myFunction(item, index)
{
var htmlString ="";
htmlString += `<li>${data[index].key}</li>`;
pull_data.insertAdjacentHTML('afterbegin',htmlString);
}

}) //end of get data and this way the data[] can be access
}) //addEventListener ended

$(document).ready(function() {
$("#clear").click(function() {
  $.ajax({
      url:"https://jsonstorage.net/api/items/22738f45-0838-4697-b7a6-f5d0dc99acd6",
      type:"PUT",
      data:'[]',
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      success: function(data, textStatus, jqXHR){

      }
  });
})
})
