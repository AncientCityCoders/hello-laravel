require('./bootstrap');

const { GiphyFetch } = require('@giphy/js-fetch-api');
const gf = new GiphyFetch('dc6zaTOxFJmzC');

let randNum = Math.floor(Math.random() * 50)

gf.search('lizards', {rating: 'g', limit: 50}).then(function({data: gifs}) {
    // console.log(gifs[randNum]);
    document.getElementById('giphy').src = gifs[randNum].images.original.url;
}).catch(() => {
    document.getElementById('giphy').src = "https://media4.giphy.com/media/K85k8NgAAm05W/giphy.gif?cid=ecf05e47i8gh75xd0jocfu0gibwsk3m81glvaaa3jdlgysur&rid=giphy.gif&ct=g";
});
