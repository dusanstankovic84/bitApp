
const cardDiv = $('.cards-div')
var numOfPages;
$(document).ready(() => {
    load(1);
})
function fillCards(value) {
    cardDiv.html("");
    console.log(' fill',value)
    value.results.forEach(function (item) {
        var card = $(`<div class='col-4 mt-5' >
                        <div class= 'card card-show'>
                            <img src='${item.image}'>
                            <div class='card-body'>
                                <h5 class='card-title' onclick="showCharacterInfo('${item.id}')" > ${item.name}</h5>
                                <button class="likeBtn">Like</button>
                            </div>
                        </div>
                    </div>`);
        cardDiv.append(card);            
    });  
    numOfPages = value.info.pages;
}
// --------------promise ---------------
function load(pageNum) {
let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "https://rickandmortyapi.com/api/character/?page=" + pageNum)
    req.onload = function() {
        if(req.status == 200) {
        myResolve(JSON.parse(req.response));
        } else {
        myReject("File not Found");
        }
    }
    req.send();
});
    myPromise.then(
        function(value) {
        paging(value,numOfPages,pageNum)     
    },
    function(error) {
        console.log(error)
    });
}
//==== pagination section ========
const pagingUl = document.querySelector(".pagination ul");
let pagingLi;
let activePrev = 'enabled'
let activeNext = 'enabled'
const paging = (value,totalNumOfPages, currentPage) => {
    fillCards(value);
    pagingLi = "";
    let beforeCurrentPage = currentPage - 1;
    let afterCurrentPage = currentPage + 1;
    if (beforeCurrentPage <= 0) {
        beforeCurrentPage = 1;
        activePrev = 'disabled'
    }
    else if (afterCurrentPage >= totalNumOfPages) {
        afterCurrentPage <= totalNumOfPages;
        activeNext = 'disabled'
    }       
    pagingLi += `<li class="prev" onclick="load(${currentPage - 1})">Prev</li>`
    for (let pageNumber = beforeCurrentPage; pageNumber <= afterCurrentPage; pageNumber++) {
        if (currentPage === pageNumber) {
            activeLi = "active"
        }
        else {
            activeLi = "";
        }    
    pagingLi += `<li class="number ${activeLi}" onclick="load(${pageNumber})">${pageNumber}</li>`
    }
    pagingLi += `<li class="next" onclick="load(${currentPage + 1})">Next</li>`;
    pagingUl.innerHTML = pagingLi;
}
// character details (fetch method)
const url1 = "https://rickandmortyapi.com/api/character/"
const showCharacterInfo = (id) => {
    fetch(url1 + id)
        .then((response) => response.json())
        .then((characterInfo) => {
            cardDiv.html("");
        let info = `<div class="col-6">
            <img src="${characterInfo.image}">
        </div>
        <div class="col-6">
            <h2>ID: ${characterInfo.id}</h2>
            <h2>Name: ${characterInfo.name}</h2>
            <h2>Status:${characterInfo.status} </h2>
            <h2>Species:${characterInfo.species} </h2>
            <h2>Type: ${characterInfo.type}</h2>
            <h2>Gender:${characterInfo.gender} </h2>
            <h2>Origin:${characterInfo.origin.name} </h2>
            <h2>Location: ${characterInfo.location.name}</h2>
            <h2>Episode: </h2>
            <h2>URL:${characterInfo.url} </h2>
            <h2>Created: ${characterInfo.created}</h2>
        </div>`;
        cardDiv.append(info);
    })
}