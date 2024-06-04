import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
 return(
    <div className='header'>
        <div className='logo -container'>
            <img className='logo' src='https://i.pinimg.com/originals/98/cf/72/98cf72d0a15d4ad7f7e8e584a3d3bd4e.png'/>
        </div>
        <div className='navitem'>
            <ul>
                <li>Home</li>
                <li>Address</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
 )
}
const data = [{
    "id":"res1",
    "title":"Food Circles",
    "image":"http://res.cloudinary.com/simpleview/image/upload/v1438123960/clients/grandrapids/file_bcf11a47-7451-464f-8c4d-c9d3e85e9146.png",
    "minCharge":"5.00 LE",
    "rating":"2",
    "titlMC":"foodCirclesMenuCat",
    "url_menucat":"https://gist.github.com/omar94hamza/95723a43bb97f21567c99948c31dc7aa/raw/d09556d7f9591c9ac36d499a48c82d0012589a03/foodcirclesmenucat.json",
    "type":["Chicken", "Meat"]
},
{
    "id":"res2",
    "title":"KFC", 
    "image":"http://vignette1.wikia.nocookie.net/ridiculoushist/images/b/b8/KFC_logo.png",
    "minCharge":"10.00 LE",
    "rating":"8",
    "titlMC":"kfc",
    "url_menucat":"https://gist.github.com/omar94hamza/5915e318a11a40f7a70e440804431e45/raw/9dfee086fc5f6734c7306c17e5fa97e3683df2d8/kfc.json",
    "type":["Fast Food", "Chicken", "Sandwiches"]
},
{
    "id":"res3",
    "title":"Dinware Dines Out", 
    "image":"https://designlogo6.wordpress.com/wp-content/uploads/2023/03/food-logo-design-inspiration-creative-6.jpg?w=500",
    "minCharge":"6.00 LE",
    "rating":"6",
    "titlMC":"dinwaredinesout",
    "url_menucat":"https://gist.github.com/omar94hamza/00f1be36672b4b12cc3125cc5fb4dc90/raw/c6e6c32835d60ab030258b9c051e73a42aea58b6/dinwaredinesout.json",
    "type":["Burgers", "Fast Food"]
},
{
    "id":"res4",
    "title":"Windmills-rest&cater-vector", 
    "image":"https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg",
    "minCharge":"Free",
    "rating":"3",
    "titlMC":"windmills",
    "url_menucat":"https://gist.github.com/omar94hamza/e01f92414a77f555fcd45255a961a9ba/raw/17ddf8c4e84e5d854084d06e5d8bfeec9bffa79d/windmills.json",
    "type":["Grilled", "Oriental", "Sandwiches"]
},
{
    "id":"res5",
    "title":"BurgerKing", 
    "image":"https://c.ndtvimg.com/2023-03/fqpicf98_momos_625x300_15_March_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
    "minCharge":"7.00 LE",
    "rating":"8",
    "titlMC":"burgerking",
    "url_menucat":"https://gist.github.com/omar94hamza/c1e7a0220547235c515e3b073bb4e7ff/raw/e122811cf463a8f47d90a5aa7407cc3998dbb21b/burgerking.json",
    "type":["Burgers", "Fast Food"]
},
{
    "id":"res6",
    "title":"Restaurant", 
    "image":"http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
    "minCharge":"16.00 LE",
    "rating":"ten",
    "titlMC":"restaurant",
    "url_menucat":"https://gist.github.com/omar94hamza/9725b018f68150d3e50d9c33ec8a3e93/raw/728fddef7356572f9bb8e7608909b542983d8fd3/restaurant.json",
    "type":["Pizza"]
}]

const data2 = [
    {"_id":{"$oid":"57506d62f57802807471dd3d"},"name":"Sun Bakery Trattoria","contact":{"phone":"386-555-0189","email":"SunBakeryTrattoria@example.org","location":[-74.0056649,40.7452371]},"stars":4,"categories":["Pizza","Pasta","Italian","Coffee","Sandwiches"]},
{"_id":{"$oid":"57506d62f57802807471dd3b"},"name":"Blue Bagels Grill","contact":{"phone":"786-555-0102","email":"BlueBagelsGrill@example.com","location":[-73.92506,40.8275556]},"stars":3,"categories":["Bagels","Cookies","Sandwiches"]},
{"_id":{"$oid":"57506d62f57802807471dd28"},"name":"XYZ Bagels Restaurant","contact":{"phone":"435-555-0190","email":"XYZBagelsRestaurant@example.net","location":[-74.0707363,40.59321569999999]},"stars":4,"categories":["Bagels","Sandwiches","Coffee"]},
{"_id":{"$oid":"57506d62f57802807471dd22"},"name":"Hot Bakery Cafe","contact":{"phone":"264-555-0171","email":"HotBakeryCafe@example.net","location":[-73.96485799999999,40.761899]},"stars":4,"categories":["Bakery","Cafe","Coffee","Dessert"]},
{"_id":{"$oid":"57506d62f57802807471dd39"},"name":"Green Feast Pizzeria","contact":{"phone":"840-555-0102","email":"GreenFeastPizzeria@example.com","location":[-74.1220973,40.6129407]},"stars":2,"categories":["Pizza","Italian"]},
{"_id":{"$oid":"57506d62f57802807471dd3a"},"name":"ZZZ Pasta Buffet","contact":{"phone":"769-555-0152","email":"ZZZPastaBuffet@example.com","location":[-73.9446421,40.7253944]},"stars":0,"categories":["Pasta","Italian","Buffet","Cafeteria"]},
{"_id":{"$oid":"57506d62f57802807471dd35"},"name":"XYZ Coffee Bar","contact":{"phone":"644-555-0193","email":"XYZCoffeeBar@example.net","location":[-74.0166091,40.6284767]},"stars":5,"categories":["Coffee","Cafe","Bakery","Chocolates"]},
{"_id":{"$oid":"57506d62f57802807471dd41"},"name":"456 Steak Restaurant","contact":{"phone":"990-555-0165","email":"456SteakRestaurant@example.com","location":[-73.9365108,40.8497077]},"stars":0,"categories":["Steak","Seafood"]},
{"_id":{"$oid":"57506d62f57802807471dd42"},"name":"456 Cookies Shop","contact":{"phone":"604-555-0149","email":"456CookiesShop@example.org","location":[-73.8850023,40.7494272]},"stars":4,"categories":["Bakery","Cookies","Cake","Coffee"]},
{"_id":{"$oid":"57506d62f57802807471dd44"},"name":"XYZ Steak Buffet","contact":{"phone":"229-555-0197","email":"XYZSteakBuffet@example.org","location":[-73.9799932,40.7660886]},"stars":3,"categories":["Steak","Salad","Chinese"]}
];

const RestaurantCard = ({res}) => {
    const {image,title, type, rating} = res;
    return(
        <div className='card'>
            <img 
                className='res-logo'
                alt='res-logo'
                src={image}
            />
            <div className='content'>
                <h2>{title}</h2>    
                <h3>Type: {type.join(", ")}</h3>
                <h3>Ratings: {rating}</h3>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                <h1> Search </h1>
            </div>
            <div className='res-container'>
                {data.map((restaurant) => (
                    <RestaurantCard key = { restaurant.id} res = {restaurant}/>
                ))};
            </div>
        </div>

    )
}
const Applayout = () => {
    return(
        <div className='App'>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);


