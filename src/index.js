import React from 'react'
import ReactDOM from 'react-dom';

// Adding CSS 
import './index.css';


// stateless functional component
// always return JSX

// const GetWrong = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello World')
//   );
// }

// JSX rules
// return single element
// use camelCase for html  attribute
// use className instead of class
// close every element
// formatting

// function GetThisRight (){
//   return (
//     <section>
//     <div className=''>
//       <h3>Hello World</h3>
//       <ul>
//         <li>
//           {/* <a href='#'>world</a> */}
//         </li>
//       </ul>
//       <img src='' alt=''/>
//       </div>
//     </section>
//   );
// }

// ReactDOM.render(<GetThisRight />, document.getElementById('root'));

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message/>
//     </div>
//   )
// }

// const Person = () => <h2>This is Me, haha</h2>;
// const Message = () => <h2>Call me or Imma do Suicide</h2>;

// ReactDOM.render(<Greeting />, document.getElementById('root'));

const books = [
  {
  id: 1,
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/61QR7qoEYVL._AC_UL600_SR600,400_.jpg',
  title: 'Ugly Love',
  author:'Colleen Hoover', 
},
{
  id: 2,
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/617uZq23IPL._AC_UL600_SR600,400_.jpg',
  title: 'Reminders of Him: A Novel',
  author:'Colleen Hoover', 
},
{
  id: 3,
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/61QR7qoEYVL._AC_UL600_SR600,400_.jpg',
  title: 'Ugly Love',
  author:'Colleen Hoover', 
},
]


// You can simply render a stirngs array, but when  it comes to an array of objects its not possible
const names = ['Peter', 'Aaron', 'Muteti', 'Mark']
const newNames = names.map((nam) => {
  return <h1>{nam}</h1>
})
console.log(newNames);

function BookList() {
  return (
    <section className='booklist'>
      {books.map((bok, index) => {
        // const{img ,title, author}=bok;
        return <Book key={bok.id} bok={bok}></Book>
      
      })}
      
      {/* <Book
        img={secBook.img}
        title={secBook.title}
        author={secBook.author}
      /> */}
      {/* <Book />
      <Book />
      <Book />
      <Book />
      <Book /> */}
    </section>
    
  )
}

const Book = (name) => {
  // console.log(name);
  // explicit
  const{img, title, author}=name.bok
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h3>{title}</h3>
      <h4>{author}</h4>

    {/* <Image />
    <BookProperties/>
      <Author />
      <Price /> */}
      {/* <p>{name.job}</p> */}
    </article>
  );
}



// const Image = () => (<img src='https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/61QR7qoEYVL._AC_UL600_SR600,400_.jpg' alt='' />);
// const BookProperties = () =><h3>Description: Ugly Love: A Novel</h3>
// const Author = () => <h4 style={{ color: 'red', fontsize: '1.75rem' }}>Author: Colleen Hoover</h4>

// const price = 'Goes for $10';
// const price2 = 'This is not a donation';

// const Price = () => {
//   return (<section>
//     <p>{price.toUpperCase()}</p>
//     <p>{price2}</p>
//     </section>
//     );
// }

const root = ReactDOM.render(<BookList />, document.getElementById('root'));
root.render();
