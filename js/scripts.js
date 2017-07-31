$(document).ready(function() {
  $(".ajax-loader").hide();
  $('.sections').on('change', function() {
      event.preventDefault();

    var select = $('.sections').val();
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + select + '.json';
       url += '?' + $.param({'api-key': '53dfced34ab7497ca7331f1f197cb367'
     })
    
    $('.stories').empty(); //or .remove

    $(".ajax-loader").show();   

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

     $.each(articleWithImage, function(key,value){

        articles += '<li class="articles">';
        articles += '<a href="' + value.url + '" class="news-anchor"  target="_blank">' + '<img class="image" src="' + value.multimedia[4].url + '" id="news-img"/>' + '</a>';
        articles += '<p class="abstract">' + value.abstract + '</p>'
        articles += '</li>';

      //  articles += '<ul class="news">';
      //  articles += '<a href=' + value.url + '>';
      //  articles += '<div class="article" style="background-image: url(' + value.multimedia[4].url + ')">';
      //  articles += '<p class="abstract">' + value.abstract + '</p>'
      //  articles += '</p></div></a></ul>';    
      // });

     });//end of .each

$('.stories').append(articles);

//$('.stories').html(articles)

$(".ajax-loader").hide();

// .fail(function() {
//   console.log (fail);
//   $('stories').append('Sorry! There was a problem, please try again.');
// };  //end of fail

    });// end of done
 }); //end of on function
}); //end of doc.ready