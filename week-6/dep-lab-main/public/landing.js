const bisonarr = [
  "https://cdn.britannica.com/66/6666-050-1A5103B6/American-bison-plains-buffalo.jpg",
  "https://www.ecowatch.com/wp-content/uploads/2022/02/bison.jpg",
  "https://files.worldwildlife.org/wwfcmsprod/images/Bison_in_snow_bison_facts_story_WW222827/story_full_width/1vyi24ekn2_ThomasSzajner_20140316_20140316_20140316_KB1A7060.jpg",
  "https://defenders.org/sites/default/files/styles/meta_image/public/2019-04/bison_phyllis_picardi_header.jpg?itok=Znrq75Ht",
  "https://d.newsweek.com/en/full/1923392/bison-yellowstone.jpg",
  "https://www.nps.gov/wica/learn/nature/images/DSC_6228475_2.JPG?maxwidth=1200&maxheight=1200&autorotate=false",
];
let imagenum = 0;

function nextbtn() {
  if (imagenum < bisonarr.length - 1) {
    imagenum++;
  } else {
    imagenum = 0;
  }
  image.src = bisonarr[imagenum];
}
function previousbtn() {
  if (imagenum > 0) {
    imagenum--;
  } else {
    imagenum = bisonarr.length - 1;
  }
  image.src = bisonarr[imagenum];
}

let image = document.querySelector("#bisonimage");
let previous = document.querySelector("#previous");
let next = document.querySelector("#next");

previous.addEventListener("click", previousbtn);
next.addEventListener("click", nextbtn);
