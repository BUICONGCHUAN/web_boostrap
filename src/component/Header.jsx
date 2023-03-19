import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        {/* navbar */}
        <div className="container ">
            <div className="nav_1">
                <div style={{fontSize:'12px'}} className="col-md-auto pt-4 ">
                     <ul className="nav fw-bold">
                        <li className="nav-item ">
                            <a className="nav-link text-dark position-relative" aria-expanded="false" href="#">NỮ</a>
                            <ul className="submenu position-absolute container">
                                <div className="list_submenu d-flex">
                                    <div className="item_list_submenu ">
                                        <Link to='/product'>
                                            <h1>NỮ</h1>
                                        </Link>
                                        <ul>
                                            <li ><a href=''> Áo dài  Châu Gia</a></li>
                                            <li ><a href=''> Merino Wool</a></li>
                                            <li ><a href=''> Timeless</a></li>
                                            <li ><a href=''> Feelin's classy</a></li>
                                            <li ><a href=''> Discover Charming</a></li>
                                            <li ><a href=''> Be Bright Be Brilliant</a></li>
                                            <li ><a href=''> Fall's Calling</a></li>
                                            <li ><a href=''> Vibrant Vâcy</a></li>
                                            <li ><a href=''> Elevated Simplicity</a></li>
                                            <li ><a href=''> Spring Love</a></li>
                                            <li ><a href=''> Hoàng Cúc Collection</a></li>
                                            <li ><a href=''> Art Station</a></li>
                                            <li ><a href=''> New Secret</a></li>
                                        </ul>
                                    </div>
                                    <div className="item_list_submenu ps-5">
                                        <h1 >NAM</h1>                                        <ul>
                                            <li ><a href=''> New Polo for Men</a></li>
                                            <li ><a href=''> Nature Soft</a></li>
                                        </ul>
                                    </div>
                                    <div className="item_list_submenu ps-5">
                                        <h1>TRẺ EM</h1>
                                        <ul>
                                            <li ><a> Cotton Kháng Khuẩn</a></li>
                                            <li ><a> Adorable Sweatsuit</a></li>
                                            <li ><a> Draw the Dream</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </li> 
                        
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#"><p>NAM</p></a>
                            <ul className="submenu position-absolute container">
                                <div className="list_submenu d-flex">
                                    <div className="item_list_submenu ">
                                        <h1>NỮ</h1>
                                        <ul>
                                            <li ><a href=''> Áo dài  Châu Gia</a></li>
                                            <li ><a href=''> Merino Wool</a></li>
                                            <li ><a href=''> Timeless</a></li>
                                            <li ><a href=''> Feelin's classy</a></li>
                                            <li ><a href=''> Discover Charming</a></li>
                                            <li ><a href=''> Be Bright Be Brilliant</a></li>
                                            <li ><a href=''> Fall's Calling</a></li>
                                            <li ><a href=''> Vibrant Vâcy</a></li>
                                            <li ><a href=''> Elevated Simplicity</a></li>
                                            <li ><a href=''> Spring Love</a></li>
                                            <li ><a href=''> Hoàng Cúc Collection</a></li>
                                            <li ><a href=''> Art Station</a></li>
                                            <li ><a href=''> New Secret</a></li>
                                        </ul>
                                    </div>
                                    <div className="item_list_submenu ps-5">
                                        <h1>NAM</h1>
                                        <ul>
                                            <li ><a href=''> New Polo for Men</a></li>
                                            <li ><a href=''> Nature Soft</a></li>
                                        </ul>
                                    </div>
                                    <div className="item_list_submenu ps-5">
                                        <h1>TRẺ EM</h1>
                                        <ul>
                                            <li ><a href=''> Cotton Kháng Khuẩn</a></li>
                                            <li ><a href=''> Adorable Sweatsuit</a></li>
                                            <li ><a href=''> Draw the Dream</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">TRẺ EM</a>
                            <ul className="submenu position-absolute container">
                                <div className="list_submenu d-flex">
                                    <div className="item_list_submenu ">
                                        <h1>NỮ</h1>
                                        <ul>
                                            <li ><a href=''> Áo dài  Châu Gia</a></li>
                                            <li ><a href=''> Merino Wool</a></li>
                                            <li ><a href=''> Timeless</a></li>
                                            <li ><a href=''> Feelin's classy</a></li>
                                            <li ><a href=''> Discover Charming</a></li>
                                            <li ><a href=''> Be Bright Be Brilliant</a></li>
                                            <li ><a href=''> Fall's Calling</a></li>
                                            <li ><a href=''> Vibrant Vâcy</a></li>
                                            <li ><a href=''> Elevated Simplicity</a></li>
                                            <li ><a href=''> Spring Love</a></li>
                                            <li ><a href=''> Hoàng Cúc Collection</a></li>
                                            <li ><a href=''> Art Station</a></li>
                                            <li ><a href=''> New Secret</a></li>
                                        </ul>
                                    </div>
                                    <div className="item_list_submenu ps-5">
                                        <h1>NAM</h1>
                                        <ul>
                                            <li ><a href=''> New Polo for Men</a></li>
                                            <li ><a href=''> Nature Soft</a></li>
                                        </ul>
                                    </div>
                                    <div className="item_list_submenu ps-5">
                                        <h1>TRẺ EM</h1>
                                        <ul>
                                            <li ><a href=''> Cotton Kháng Khuẩn</a></li>
                                            <li ><a href=''> Adorable Sweatsuit</a></li>
                                            <li ><a href=''> Draw the Dream</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-danger" href="#" >X-MAX SALE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#" >BỘ SƯU TẬP</a>
                            <ul className="submenu position-absolute container">
                                <div className="list_submenu d-flex">
                                    <div className="item_list_submenu ">
                                        <h1>NỮ</h1>
                                        <ul>
                                            <li ><a href=''> Áo dài  Châu Gia</a></li>
                                            <li ><a href=''> Merino Wool</a></li>
                                            <li ><a href=''> Timeless</a></li>
                                            <li ><a href=''> Feelin's classy</a></li>
                                            <li ><a href=''> Discover Charming</a></li>
                                            <li ><a href=''> Be Bright Be Brilliant</a></li>
                                            <li ><a href=''> Fall's Calling</a></li>
                                            <li ><a href=''> Vibrant Vâcy</a></li>
                                            <li ><a href=''> Elevated Simplicity</a></li>
                                            <li ><a href=''> Spring Love</a></li>
                                            <li ><a href=''> Hoàng Cúc Collection</a></li>
                                            <li ><a href=''> Art Station</a></li>
                                            <li ><a href=''> New Secret</a></li>
                                        </ul>
                                    </div>
                                    <div className="item_list_submenu ps-5">
                                        <h1>NAM</h1>
                                        <ul>
                                            <li ><a href=''> New Polo for Men</a></li>
                                            <li ><a href=''> Nature Soft</a></li>
                                        </ul>
                                    </div>
                                    <div className="item_list_submenu ps-5">
                                        <h1>TRẺ EM</h1>
                                        <ul>
                                            <li ><a href=''> Cotton Kháng Khuẩn</a></li>
                                            <li ><a href=''> Adorable Sweatsuit</a></li>
                                            <li ><a href=''> Draw the Dream</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#" >LIFESTYLE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#" >VỀ CHÚNG TÔI</a>
                        </li>
                    </ul>
                </div>
                <Link to='/'>
                    <div className=" col-md-2 pt-4 px-5">
                        <img src={`${require("../img/logo.png")}`}
                        style={{width:'130px'}}/>
                    </div>
                </Link>    
                <div className="col-md-3 pt-4">
                    <div className="form-group has-search  d-flex">
                        <input type="text" className="form-control" placeholder="TÌM KIẾM TẠI ĐÂY"/>
                        <span className="fa fa-search form-control-feedback"></span>
                    </div>
                </div>
                <div className="col-md-2 pt-4">
                    <div class="icon px-5">
                        <a href='#'><i className="ri-headphone-line "></i></a>
                        <Link to='/cart'>
                            <a href='#'><i className="ri-shopping-bag-line gap-5"></i></a>
                        </Link>
                        <a href='#'><i className="ri-user-line"></i></a>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
        
    </div>
  )
};
