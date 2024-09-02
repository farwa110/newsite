fetch("https://kea-alt-del.dk/t7/api/products");
.then((res)=>res.json())
.then(data=>showProduct(data)) //indefor parentesen kunne man også skrive showProduct

function showProducts(products){
    //looper og kalder showProduct
    products.forEach (showProduct)
}

function showProduct (product){
    //console.log (product);
//fang template 
const template=document.querySelector("smallProductTemplate").content;
//lav en kopi 
const copy=template.cloneNode(true);
//ændre indhold 
copy.querySelector("h3").textContemt=product.productdisplayname;
if(product.soldout){
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut")



}


//appende 
document.querySelector("main").appendChild(copy); 

}



//{"id":1525,"gender":"Unisex","category":"Accessories","subcategory":"Bags","articletype":"Backpacks","season":"Fall","productionyear":2010,"usagetype":"Casual","productdisplayname":"Deck Navy Blue Backpack","price":1299,"discount":55,"brandname":"Puma","soldout":0},