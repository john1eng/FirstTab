var subject;
window.addEventListener("load", function(){

  $.get("https://jsonstorage.net/api/items/22738f45-0838-4697-b7a6-f5d0dc99acd6",
  function(data, textStatus, jqXHR){
  subject = prompt("What is the subject?");

  //add to data[]
  data.push({'key':subject});
  var newDataJ = JSON.stringify(data);

  //update data
  $.ajax({
      url:"https://jsonstorage.net/api/items/22738f45-0838-4697-b7a6-f5d0dc99acd6",
      type:"PUT",
      data:newDataJ,
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      success: function(data, textStatus, jqXHR){

      }
  }); //end update data
  searchSub = subject.replace(/ /g,"+");
  document.getElementById("demo").innerHTML += `<a href=http://www.google.com/search?q=${searchSub} target="_blank"> ${subject} </a>`;


})


});

window.addEventListener("load", function(){
document.body.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
});
