import { Link } from 'react-router-dom';
import BottomDetail from './BottomDetail';


const DashboardNewsItem = (props) => {
    const {moreItems} = props;
    console.log(moreItems)
    return(
      <>
      {moreItems.map(item => (
        <Link to={`/blog/${item.id}`}>
          <div className="item d-flex">
            <div className="col-4 p-0">
              <div style={{backgroundImage:`url(${item.coverImage.url})`}} className="item_img background_size">
              </div>
            </div>
            <div className="item_detail col-8">
              <h5 className="item_detail_head">{item.title}</h5>
              <p className="item_detail_p">{item.excerpt}</p>
              <BottomDetail item={item} />
            </div>
          </div>
        </Link>
      ))}
      </>
    )
}

export default DashboardNewsItem;