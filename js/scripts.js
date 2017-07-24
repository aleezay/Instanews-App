//connect to DOM ~
// on click, select topic ~ 
// prevent default ~
// header collapse
// empty - or .remove? ~
// loader pops up - $(".ajax-loader").show();
// json fetch - probs the longest block of code?
// append data
//make sure only 12 and with images. use filter and splice.
// remove loader - $('.name').remove();
// fail ~

//connect to DOM
$(document).ready(function() {

//on to make button functional, then prevent page from refreshing
   $("#sections").on('change', function() {
     event.preventDefault();

//initial variables itunes example
//eg. albumData, albumItems, artistName, itunesUrl
//    $albumList=(."album-list");

//NYT API//
var url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
    url += '?' + $.param({'api-key': "53dfced34ab7497ca7331f1f197cb367"

$.ajax({
 url: url,
 method: 'GET', 
 dataType: 'json';
 
//From Itunes example 
// .done(function(data){
//    console.log(data);
//    $.each(data.results,function(key,value){
//      $("album-list").append("<li><img 
//     src='"+value.artworkUrl60+"'>"+value.collectionName+"<"/li>");
//    });
//  })

//cleaner version: 
// .done(function(data){ 
//  albumData=data.results

 .done(function(data) {
   console.log ('data');

 $.each(data.results,function(key,value){
     $("articleswImages").append("+ enter values+");
// $(".stories").append("<li><img src='"+value.artworkUrl60+"'>"+value.collectionName+"</li>");

    });//end of.each
 })//end of done function

 });//end of ajax call

//loader
$(".ajax-loader").show();   

//clear results before next selection  
$('.stories').empty(); //or .remove

//hide loader
$(".ajax-loader").hide();

//Fail function
.fail(function() {
  console.log ('fail');
  $('stories').append('Sorry! There was a problem, please try again.');
};  //end of fail

}); //end of on function
}); //end of doc.ready




//FROM SLIDES
// $('button').on('click', function() {
//    $.ajax({
//       method: 'GET',
//       url: 'https://api.github.com/users/octocat'
//    })
//    .done(function(data) {
//       $('.user-name').append(data.login);
//    })

/*ITUNES EXAMPLE
$("#album-search").on("submit", function(event){

 $.ajax({
   method:"GET", 
   dataType:"jsonp",
   url:"https://itunes.apple.com/search?entity=album&limit=6&term="
   $("artist-name").val().replace("","+")
   })
   
  .done(function(data){
   console.log(data);
   $.each(data.results,function(key,value){
     $("album-list").append("<li><img 
    src='"+value.artworkUrl60+"'>"+value.collectionName+"<"/li>");
   });
 }) //end of done

   .fail(function(){
     console.log("anything");
     ("album-list").append("<li>no results</li>");
   });  //end of fail
}); //end of on function

$('.album-list').empty(); 
*/