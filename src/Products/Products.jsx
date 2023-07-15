import React, { useEffect , useState } from "react";
import ListItem from "./Listitems/ListItem";
import axios from "axios";
import Loader from "../components/UI/Loader";
import { useLocation, useParams } from "react-router-dom";


const Products = () => {

  const [items, setItems] = useState([])
  const [loader ,setLoader] = useState(true)
  const params = useParams()
  const {search} = useLocation()
  const queryParams = new URLSearchParams(search).get("search");
    // {
    //   id: 0,
    //   discountPrice: 340,
    //   price: 450,
    //   title: "Title of the item",
    //   thumbnail: "placeholder.png",
    // },
  
    // {
    //   id: 1,
    //   discountPrice: 750,
    //   price: 1055,
    //   title: " Item 2",
    //   thumbnail: "placeholder.png",
    // },
  
    // {
    //   id: 2,
    //   discountPrice: 100,
    //   price: 300,
    //   title: " Item 3",
    //   thumbnail: "placeholder.png",
    // },
  
    // {
    //   id: 3,
    //   discountPrice: 800,
    //   price: 1000,
    //   title: " Item 4",
    //   thumbnail: "placeholder.png",
    // },
    // {
    //   id: 4,
    //   discountPrice: 900,
    //   price: 1200,
    //   title: " Item 5",
    //   thumbnail: "placeholder.png",
    // },
  
useEffect(() => {
  async function fetchItems(){
    try {
      let slug = `items.json`
      if(params.category){
        slug = `items-${params.category}.json`
      }

      if(queryParams){
        slug += `?search=${queryParams}`
      }
      const response =  await axios.get(`https://react-guide-3bb5a-default-rtdb.firebaseio.com/${slug}`)
  const data = response.data
  const transformData = data.map((item , index) => {
    return {
      ...item,
      id : index
    }
  })
  // setLoader(false)
  setItems(transformData)
      
    } 
    catch (error) {
      // setLoader(false)
      console.log("Error", error)
      alert("Some error occured")
    }
    finally{
      setLoader(false)
    }
  
  }
  fetchItems();

  return() => {
    setItems([])
    setLoader(true)
  }
 
}, [params.category , queryParams])


  return (
    <>
    <div className={"product-list"}>
      <div className={"product-list--wrapper"}>
        
        {
          items.map(item =>{
            console.log(item)
            return (<ListItem key={item.id} data={item}/>)
          })
        }
      </div>
    </div>
{loader && <Loader/>}  {/* if we want to conditionally render the loader, whenever there is a loading state then this loading state will be shown & when the loading is being done or if there is some error , the loader will basically hidden because the variable(loader) will become false. */}

    </>
  );
};

export default Products;
