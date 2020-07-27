
let AllAddBtn = document.querySelectorAll(".btn-success");


if (localStorage.getItem("basket") == null) {
    localStorage.setItem("basket", JSON.stringify([]))
}

AllAddBtn.forEach(btn => {
    btn.onclick = function (eve) {
        eve.preventDefault();
        let Id = this.parentNode.parentNode.getAttribute("data-id");

        let name = this.parentNode.firstElementChild.innerText;
        let image = this.parentNode.previousElementSibling.getAttribute("src");

        if (localStorage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]))
        }

        let basket = JSON.parse(localStorage.getItem("basket"));

        let existPro = basket.find(p => p.id == Id);
        if (existPro === undefined) {
            basket.push({
                id: Id,
                name: name,
                image: image,
                count: 1
            })
        } else {
            existPro.count += 1;
        }

        localStorage.setItem("basket", JSON.stringify(basket))
        GetBasketCount();
    }
})

let basketCount = document.querySelector(".basketCount");

function GetBasketCount() {
    if (localStorage.getItem("basket") != null) {
        let basket = JSON.parse(localStorage.getItem("basket"));
        basketCount.innerHTML=basket.length;
    }
    
}
GetBasketCount();

let table=document.querySelector(".table");
let basket = JSON.parse(localStorage.getItem("basket"));

if(basket.length!=0){
    for (const pro of basket) {
    
        let tdImg=document.createElement("td");
        let img=document.createElement("img");
        img.setAttribute("src",pro.image);
        img.setAttribute("width","200px");
        tdImg.append(img);
        
        let tdName=document.createElement("td");
        tdName.innerText=pro.name;
        
        let tdCount=document.createElement("td");
        tdCount.innerText=pro.count;

        let td=document.createElement("td");
        let Itag=document.createElement("i");
        Itag.className="fas fa-times";
        Itag.onclick=function(){
       localStorage.removeItem("tr");
        }
        td.append(Itag);

        let tr=document.createElement("tr");
        tr.append(tdImg,tdName,tdCount,td);
        // document.querySelector(".table tbody").append(tr)


        table.lastElementChild.append(tr);
        }
}else{
    table.classList.add("d-none");
    table.previousElementSibling.classList.remove("d-none");
}