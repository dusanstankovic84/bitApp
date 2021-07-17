const pagingUl = document.querySelector('.pagination ul')

let pagingLi;
let activeLiP;
let activeLiN;

const paging = (totalNumOfPages, currentPage) => {
    pagingLi = '';
    activeLiP = 'enabled'
    activeLiN = 'enabled'

if (currentPage <= 1) {
    activeLiP = 'disabled'
}
else if (currentPage >= totalNumOfPages) {
    activeLiN = 'disabled'
}


    pagingLi += `<li class="${activeLiP}" onclick="paging(${totalNumOfPages}, ${currentPage - 1})">Previous</li>`

for (let pageNumber = currentPage - 1; pageNumber <= currentPage + 1; pageNumber++) {
    if (pageNumber > 0 && pageNumber <= totalNumOfPages) {
    pagingLi += `<li onclick="paging(${totalNumOfPages}, ${pageNumber})">${pageNumber}</li>`
    }
}

    pagingLi += `<li class="${activeLiN}" onclick="paging(${totalNumOfPages}, ${currentPage + 1})">Next</li>`
    
pagingUl.innerHTML = pagingLi;

}

paging(20,8)


myResolve(JSON.parse(req.response))



/* 
const pagingUl = document.querySelector(".pagination ul");

let pagingLi;

const paging = (totalNumOfPages, currentPage) => {
    pagingLi = "";

    

    if (currentPage > 1) {
        pagingLi += `<li onclick="paging(${totalNumOfPages}, ${currentPage -1})">Previous</li>`
    }

    for (let pageNumber = currentPage - 1; pageNumber <= currentPage + 1; pageNumber++) {
        pagingLi += `<li onclick="paging(${totalNumOfPages}, ${pageNumber})">${pageNumber}</li>`
    }

    if (currentPage < totalNumOfPages) {
        pagingLi += `<li onclick="paging(${totalNumOfPages}, ${currentPage +1})">Next</li>`
    }

    pagingUl.innerHTML = pagingLi;
}

paging(20, 3)
*/

