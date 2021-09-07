let gifData;

const $title = $('#title');
const $images = $('#images');
const $url = $('#url');
const $input = $('input[type = "text"]');

function handleGetData(event){
    event.preventDefault();
    $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?q=${$input.val()}&api_key=A5N4Nvuh6fNQJHuYOd33Lxcr2SN3neZq&limit=5`
    }).then(function(data){
        console.log(data);
        gifData = data;
        render();
    }, 
    function(error){
        console.log('Error:', error);
    })
} 
function render(){
    $title.text(gifData.data[0].title);
    $title.text(gifData.data[1].title);
    $title.text(gifData.data[2].title);
    $title.text(gifData.data[3].title);
    $title.text(gifData.data[4].title);
    $images.attr("src", gifData.data[0].images.original.url);
    $images.attr("src", gifData.data[1].images.original.url);
    $images.attr("src", gifData.data[2].images.original.url);
    $images.attr("src", gifData.data[3].images.original.url);
    $images.attr("src", gifData.data[4].images.original.url);
    $url.text(gifData.data[0].url);
    $url.text(gifData.data[1].url);
    $url.text(gifData.data[2].url);
    $url.text(gifData.data[3].url);
    $url.text(gifData.data[4].url);
}

// data.forEach(render)
// render(images, index); {
//   images, item; 
// }

// for (i = 0; i < 5; i++;) {
// gifData = data[]
//}

$('form').on('submit', handleGetData);
