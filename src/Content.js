import React, { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

function Content(props) {
  let handle = useParams()

  let [img, setimg] = useState();
  let [imgg, setimgg] = useState([]);
  let [con, setcon] = useState([]);


  const changeimg = (ele) => {
    setimg(ele);
  }
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${handle.id}`)
      .then(function (response) {
        // handle success
        // console.log(response.data.products);
        setcon(response.data);
        setimgg(response.data.images);
        setimg(response.data.thumbnail);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])


  return (
    <div>
      <Header></Header>
      <Container>
        <Row className='content'>
          <Col xs={1}>
            {
              imgg.map((ele) => {
                return (
                  <li style={{ listStyle: 'none' }} className='my-3'>
                    <img src={ele} className='content-simg' style={{ height: '100px', width: '100px', objectFit: 'cover' }} onClick={() => changeimg(ele)}></img>
                  </li>
                )
              })
            }
          </Col>
          <Col className='my-auto'>
            <div className='p-5'>
              <img src={img} className='content-img' style={{ height: '370px', width: '600px', objectFit: 'cover' }}></img>
            </div>
          </Col>
          <Col className='m-auto'>
            <div className='cnt'>
              <h3 className='mb-0'>{con.description}</h3>
              <font>Visit the store</font>
              <div className='d-flex icons' style={{ color: 'goldenrod', fontSize: '20px' }}>
                <font className="px-2 fw-bold" style={{ color: 'orange' }}>{con.rating}</font>
                <i><TiStarFullOutline /></i>
                <i><TiStarFullOutline /></i>
                <i><TiStarFullOutline /></i>
                <i><TiStarFullOutline /></i>
                <i><TiStarHalfOutline /></i>
              </div>
              <hr className='ms-0 mb-3'></hr>
              <div className='d-flex align-items-center' style={{fontWeight:'bold',color:'skyblue',fontSize:'20px'}}>
                <span className='price'><sup className='sup'>$</sup>{con.price}</span>
                <p className='ps-3 m-0 dis'>Discount: {con.discountPercentage}%</p>
              </div>
              <p>Inclusive of all taxes</p>
              <hr className='ms-0 mb-3'></hr>
              <div className='l_cnt'>
                <span className='span pe-2'>Product:</span><span className='span1'>{con.title}</span>
              </div>
              <div className='l_cnt'>
                <span className='span pe-2'>Category:</span><span className='span1'>{con.category}</span>
              </div>
              <div className='l_cnt'>
                <span className='span pe-2'>Brand:</span><span className='span1'>{con.brand}</span>
              </div>
              <div className='l_cnt'>
                <span className='span pe-2'>Stock:</span><span className='span1'>{con.stock}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Content;
