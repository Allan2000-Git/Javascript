//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
//Unsplash free API

const accessKey = "CYjbFnFNLmtdhAWmM1HWuTABycuWO8kPEurk45rNZmc";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResult = document.querySelector(".images-div");
const showMoreButton = document.getElementById("show-more");
const searchButton = document.getElementById("search");

let pages = 1;

// console.log(input);

async function searchImages(){
    let input = searchInput.value;
    const API_URL = `https://api.unsplash.com/search/photos?page=${pages}&query=${input}&client_id=${accessKey}&per_page=9`;
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log(data);

    //to give new results
    if(pages===1){
        searchResult.innerHTML="";
    }

    const result = data.results;
    result.map((res)=>{
        const image=document.createElement('img');
        image.src=res.urls.small;
        const imgLink = document.createElement("a");
        imgLink.href=res.links.html;
        imgLink.target="_blank";

        imgLink.appendChild(image);
        searchResult.appendChild(imgLink);
    });

    showMoreButton.style.display="block";
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    pages=1;
    searchImages();
});

showMoreButton.addEventListener("click", () => {
    pages+=1;
    searchImages();
});

