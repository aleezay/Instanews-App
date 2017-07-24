$(document).ready(function() {
  $('.sections').on('change', function() {
      event.preventDefault();

    var select = $('.sections').val();
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + select + '.json';
       url += '?' + $.param({'api-key': '53dfced34ab7497ca7331f1f197cb367'
     })
    $.ajax({
      method: 'GET',
      url: url
    })
    .done(function(data) {
      console.log (data);

      var articles = "";
      var articleWithImage = data.results.filter(function(value){ //data.results.filter?
                    return value.multimedia.length
      }).slice(0, 12);
     
      // var articleImage = value.multimedia[4].url, 
      //     abstract = value.abstract,
      //     articleUrl = value.url; 

    // var results = data.results;
    // var articleImage, abstract, articleUrl,
    // articleImage = results.filter(function(value){ //data.results.filter?
    //                 return value.multimedia.length > 0;
    // });//end of .filter

     $.each(articleWithImage, function(key,value){

      //  if (value.multimedia.length > 0 ) {
    
    
          articles += '<ul>';
          articles += '<a href="' + value.url + '" class="news-anchor"  target="_blank">' + '<img src="' + value.multimedia[4].url + '" id="news-img"/>' + '</a>';
          articles += '<p class="abstract">' + value.abstract + '</p>'
          articles += '</ul>';
          
          //results.slice(0,12)
   
     });//end of .each

// $('.stories ul').append('<li><a href="(' + articleUrl +')"><article style="background-image:url(' + articleImage + ')">' + '<div class="overlay">' + '<p>' + abstract + '</p>' + '</div>' + '</article></a></li>');

$('.stories').append(articles);
//$('.stories ul').append('<li>hi</li>');

});// end of done
  
  //   //  $(".stories ul").append("<li><img 
  //   // src='"+value.artworkUrl60+"'>"+value.collectionName+"<"/li>");
  //  });
  }); //end of on function
}); //end of doc.ready