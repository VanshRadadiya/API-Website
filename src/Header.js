import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import img1 from './images/logo.png';
import { BsSearch } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
function Header(props) {
    let [s,sets] = useState('');
    let[sdata,setsdata] = useState([]);
    const searchdata = () =>{
        if(s!=''){
            setsdata(props.data);
            let serarr = sdata.filter((ele)=>{
                return ele.title.toLowerCase().includes(s.toLowerCase())
            })
            props.setsdata(serarr);
            props.setttmp("search");
            console.log(serarr)
        }
    }

    const alldata = () =>{
        props.setsdata(props.tdata);
        props.setttmp("all");

    }
    return (
        <div>
            <div className='header mb-5'>
                <Container>
                    <Row className='align-items-center'>
                        <Col xs={3} className='text-start'><img src={img1} style={{height:'50px',width:'200px'}}></img></Col>
                        <Col xs={7} className='text-center'>
                            <button className='header-all' onClick={alldata}>All</button>
                            <input type='text' className='ps-2' placeholder='Search Products' style={{width:'430px',height:'40px'}} onChange={(e)=>{sets(e.target.value)}}></input>
                            <button className='header-ser' onClick={searchdata}><BsSearch style={{height:'100%',width:'100%'}}></BsSearch></button>
                        </Col>
                        <Col xs={2} className='text-end'><MdOutlineShoppingCart style={{color:'white',fontSize:'30px'}}></MdOutlineShoppingCart></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Header;
