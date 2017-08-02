$(document).ready(() => {

  $(".ajax-loader").hide();
  $('.sections').on((event) => {
      event.preventDefault();

      $(".ajax-loader").hide();

   let select = $('.sections').val();
    let url = `https://api.nytimes.com/svc/topstories/v2/${select}.json`;
          url += `${?}$.param'api-key': '53dfced34ab7497ca7331f1f197cb367'`;

// const select = $('.sections').val();
//  const url = `https://api.nytimes.com/svc/topstories/v2/${select}.json?api-key=53dfced34ab7497ca7331f1f197cb367`;

    $('.stories').empty();

    $(".ajax-loader").show();   

    $.ajax({
      method: 'GET',
      url: url
    })
    .done((data) => {
      console.log (data);

      let articles = "";
      let articleWithImage = data.results.filter ((value) => {
                 return value.multimedia.length}).slice(0, 12);

     $.each(articleWithImage, (key,value) => {

       //iamhere

        articles += `<li class="articles">
                     <a href="${value.url}" class="news-anchor"  target="_blank"><article style="background-image:url('${value.multimedia[4].url}')" img class="image"></a>
                     <p class="abstract">${value.abstract}</p>
                     </li>`;
            
     }//end of .each

$('.stories').append(articles);

$(".ajax-loader").hide();

// .fail((err) => {
//   throw err;
// });//end of fail

    });// end of done
 }); //end of on function
}); //end of doc.ready