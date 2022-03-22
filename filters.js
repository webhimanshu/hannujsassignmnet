let cart1=[2,5,8,3,2,2];
fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((result) => {
  
   let filterdata= result.filter((data)=>
    {
return cart1==(data.id);
    })
    console.log(filterdata)
});