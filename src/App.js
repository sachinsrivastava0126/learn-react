import React, { useEffect, useState } from 'react';
//import firebase from 'firebase/app';


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAFK3guxZWj8JyfwS4mrl_YvKIWvASrZzQ",
    authDomain: "learn-react-shopping-car-abe33.firebaseapp.com",
    databaseURL: "https://learn-react-shopping-car-abe33.firebaseio.com",
    projectId: "learn-react-shopping-car-abe33",
    storageBucket: "",
    messagingSenderId: "272097234533",
    appId: "1:272097234533:web:62fc0a8100ddf47a11808c",
    measurementId: "G-4Z10K68CNK"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <ul>
      {products.map(product => <li key={product.sku}>{product.title}</li>)}
    </ul>
  );
};

export default App;