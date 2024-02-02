import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import { TiStarFullOutline,TiStarHalfOutline } from "react-icons/ti";
import Category from './Category';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function Items(props) {
    let [cdata,setcdata] = useState([]);
    let [tmp,settmp] = useState([]);
    let data;
    let cat;
    cat = props.cat;
    // console.log(cat);
    let catedata = props.data;
    
    if(props.sdata=='' && cdata==''){
        data=props.data;
    }
    else{
        if(tmp==="cate"){
            data = cdata;
        }else if(props.ttemp === "search"){
            data=props.sdata;
        }else if(props.ttemp === "all"){
            data=props.sdata;
        }
    }


  return (
    <div>
      <Container>
        <Row>
            <Col xs={3}>
                <Category c={cat} catedata={catedata} setcdata={setcdata} settmp={settmp}></Category>
            </Col>
            <Col xs={9}>
                <Row>
                    {
                        data.map((ele,ind)=>{
                            return(
                                <Col key={ind} xs={4} className='text-center'>
                                    <Link to={`/${ele.id}`} style={{textDecoration:'none',color:'black'}}>
                                    <div className='m-3 items-part p-3'>
                                        <img src={ele.thumbnail} style={{width:'100%',height:'250px',objectFit:'cover'}}></img>
                                        <div className='item-content text-start p-3'>
                                            <h6 className='my-2' style={{textDecoration:'underline',textUnderlineOffset:'5px'}}>{ele.title}</h6>
                                            <div className='d-flex align-items-center' style={{color:'goldenrod',fontSize:'20px'}}>
                                                <TiStarFullOutline></TiStarFullOutline>
                                                <TiStarFullOutline></TiStarFullOutline>
                                                <TiStarFullOutline></TiStarFullOutline>
                                                <TiStarFullOutline></TiStarFullOutline>
                                                <TiStarHalfOutline></TiStarHalfOutline>
                                                <font className="ps-2">{ele.rating}</font>
                                            </div>
                                            <span className='price'>Price : <sup className='sup'>$</sup>{ele.price}</span>
                                            <p className='m-0 dis'>Discount : {ele.discountPercentage}%</p>
                                            <p style={{ color: "#F3A847", fontSize: "16px" }}>FREE delivery</p>
                                        </div>
                                    </div>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Items;
    