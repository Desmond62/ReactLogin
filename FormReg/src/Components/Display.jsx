import { Link } from "react-router-dom";
import des from './styles.module.css'

const Display = ({ item, key }) => {
  return (
   
      
                <div className="col-md-2 mx-auto">
                <section className={des.img}>
                    <div key={key} className={des.bk}>
                    <Link to={`/productDetail/${item.id}`} replace>
                    <img src={item.images[0]} alt=""/>
                    </Link>

                    <div className={des.display}>
                    <h1 style={{fontSize:'11px'}}> {item.title}</h1>
                    <p>${item.price}</p>
                    </div>
                    </div>
                    </section>
                </div>

  );
};

export default Display;

      //   <div key={key} className="">      
      // <Link to={`/productDetail/${item.id}`} replace>
      //   <img
      //     src={item.images[0]}
      //     alt=""
      //     style={{
      //       width: "150px",
      //       height: "150px",
      //       // borderRadius: "50%",
      //       objectFit: "cover",
      //     }}
      //   />
      // </Link>
      // <p className="">{item.price}</p>
      // <p style={{fontSize:'15px'}}> {item.title}</p>
       

  

