import axios from 'axios';

const meals_link = 'https://www.themealdb.com/api/json/v1/1/random.php'
const drinks_link = 'https://api.punkapi.com/v2/beers'

const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };


  const postData = async (url, body) => {
    try {
      const response = await axios.post(url, body);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  

  const getOrder = (Email) => {
  return fetchData(`${meals_link}?Email=${Email}`)
  }

  const addorder = async (order) => {
    if (!order.id) {
      const newOrder = {...order, id: Date.now()}
      return postData(meals_link, newOrder)
    }
  
  

     }; 
     
     export {
      fetchData, 
      getOrder,
      addorder

     };