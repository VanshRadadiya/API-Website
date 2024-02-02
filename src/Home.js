import { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';
import Header from "./Header";
import Items from "./Items";
import Content from "./Content";
import { useParams } from "react-router-dom";

function Home() {
    let [data,setdata] = useState([]);
    let [sdata,setsdata] = useState([]);
    let [tdata,settdata] = useState([]);
    let [ttdata,setttdata] = useState([]);
    let [cat,setcat] = useState([]);
    let [ttemp,setttmp] = useState();
    let [itemdata,setitemdata] = useState(null);
    let handle = useParams();
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(function (response) {
                // handle success
                // console.log(response.data.products);
                setdata(response.data.products);
                settdata(response.data.products);
                setttdata(response.data.products);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

            axios.get('https://dummyjson.com/products/categories')
            .then(function (response) {
                // handle success
                // console.log(response.data.products);
                setcat(response.data);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    })
    console.log(ttdata);
    
    // if(handle.cate!=undefined){
    //     alert(handle.cate)
    //     let tmp = ttdata.filter((ele)=>{
    //         return ele.category == handle.cate;
    //     })
    //     console.log(tmp);
    //     // handle.cate = undefined;
    //     setdata(tmp);
    // }
    return (
        <>
            <Header setsdata={setsdata} setttmp={setttmp} setdata={setdata} data={data} tdata={tdata}></Header>
            {
            itemdata?<Content itemdata={itemdata}></Content>:
            <Items data={data} setitemdata={setitemdata} ttemp={ttemp} cat={cat} sdata={sdata}></Items>
            }
        </>
    )
}

export default Home;