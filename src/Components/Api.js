import './Api.css';

function Api(){

    // GET
fetch("https://fakestoreapi.com/products/", {method: "get"})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err))


const Add = {
    id: 1,
    title: "Abeer ,I'm Finishing Univercity",
    price: 150.55,
    description: "Your Perfect Pack For Everyday Use ... ",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
    rate: 3.9,
    count: 120,
}
}


  // POST
fetch("https://fakestoreapi.com/products", {
    method: "post",
    body: JSON.stringify(Add),
  })
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err))


  // EDIT

const Edit = {
        title: "Abeer ,I'm Finishing Univercity",
        price: 150.55,
        description: "Your perfect pack for everyday use ...",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
     }


fetch("https://fakestoreapi.com/products/7", {
        method: "put",
        body: JSON.stringify(Edit),
     })
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err))

  // DELETE

fetch("https://fakestoreapi.com/products/6", {method: "delete"})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err));

fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err))

    }

    export default Api;

