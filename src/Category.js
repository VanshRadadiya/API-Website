import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
function Category(props) {

    let catedata = props.catedata;
    let cate = props.c;
    // console.log(cate)
 


    const cateser = (e) => {
        alert(e);
        console.log(catedata);
        let catee = catedata.filter((ele) => {
            return ele.category == e;
        })
        console.log(catee);
        props.setcdata(catee);
        props.settmp("cate");
    }
    return (
        <>

            <div className='categories mt-3' style={{ backgroundColor: 'white' }}>
                <div className='pt-1'>
                    <h4 style={{ color: 'white', textAlign: 'center', backgroundColor: '#131921' }} className='p-3 m-3'>Categories</h4>
                    <ul style={{ listStyle: 'none' }} className='px-4'>
                        {
                            cate.map((ele, ind) => {
                                return (
                                    <>
                                        <Link className='category-link' to={`/category/${ele}`}>
                                            <li style={{ cursor: 'pointer' }} onClick={(e) => { cateser(ele) }}>{ele}</li>
                                        </Link>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Category;
