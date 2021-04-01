import {useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import BottomDetail from './BottomDetail';


const DashboardNewsItem = ({item}) => {

  
    return(
      <Link to="">
        <div className="item d-flex">
              <div className="col-4 p-0">
                <div style={{backgroundImage:`url(https://pennystocks.today/wpi/wp-content/uploads/2021/03/LABOR-WORKERS.jpg)`}} className="item_img background_size">
                </div>
                {/* <img src={fetchData.imgUrl} className="item_img"  alt="" /> */}
              </div>
              <div className="item_detail col-8">
                <h5 className="item_detail_head">LTNC, DD & the Reason Behind The Rise in Stock Price</h5>
                <p className="item_detail_p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nesciunt corrupti voluptates saepe voluptate dignissimos atque ex et asperiores tenetur, consectetur eos quidem laborum in officiis odit dolor, dicta nam.</p>
               
                <BottomDetail item="" />

              </div>
            </div>
            </Link>
    )
}

export default DashboardNewsItem;