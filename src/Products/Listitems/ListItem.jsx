import React, { Fragment, useState } from "react";
import AddtoCardIcon from "../../assets/icons/add_cart.svg";
import Modal from "../../components/UI/Modal";
import { connect, useDispatch, useSelector } from "react-redux";
import { addItemHandler, removeItemHandler } from "../../actions";
// import { Connect } from "react-redux";

const ListItem = ({ data }) => {
  // console.log(item)
  

  // const [counter, setCounter] = useState(0);
  const [showModal, setShowModal] = useState(false)
  const item = useSelector(state => state.items.find(item => item.id === data.id))
  const dispatch = useDispatch()

  const increaseCounterbyone = event => {
    event.stopPropagation()
    dispatch(addItemHandler(data))
    
  };
  const decreasecounterbyone = event => {
    event.stopPropagation()
    dispatch(removeItemHandler(data.id))
   
  };

  const handleModal = () => {
    setShowModal(previousState => !previousState)
  }
  // in this structure we have a wrapper then we have an image then we have a information about price , title then we have a button
  return (
    <Fragment>
    <div onClick={handleModal  
    } className={"item-card"}>
      <img
        className={"img-fluid"}
        src={`/assets/${data.thumbnail}`}
        alt="some test"
      />
      <div className={"item-card-information"}>
        <div className={"pricing"}>
          <span>₹{data.discountedPrice}</span>
          <small>
            <strike>₹{data.price}</strike>
          </small>
        </div>
        <div className={"title"}>
          <h3>{data.title}</h3>
        </div>
      </div>
      {/* <small className={"cart-message"}></small> */}

      {
      !item || item?.quantity < 1 ? 
        <button className={"cart-add"} onClick={increaseCounterbyone}>
          <span>Add to Cart</span>
          <img src={AddtoCardIcon} alt="card item" />
        </button>
      : 
        <div className="cart-addon">
          <button onClick={decreasecounterbyone}>-</button>
          <span>{item.quantity}</span>
          <button onClick={increaseCounterbyone}>+</button>
        </div>
      }
    </div>
     { showModal && 
     <Modal onClose = {handleModal} >
      <div className="item-card__modal">
        <div className="img-wrap">
          <img
        className={"img-fluid"}
        src={`/assets/${data.thumbnail}`}
        alt={data.title}/>
        </div>
        <div className="meta">
          <h3>{data.title}</h3>
          <div className={"pricing"}>
          <span>${data.discountPrice}</span>
          <small>
            <strike>{data.price}</strike>
          </small>
        </div>
        <p>{data.description}</p>
        {
      !item || item?.quantity < 1 ? 
        <button className={"cart-add cart-add__modal"} onClick={increaseCounterbyone}>
          <span>Add to Cart</span>
          <img src={AddtoCardIcon} alt="card item" />
        </button>
      : 
        <div className="cart-addon cart-addon__modal">
          <button onClick={decreasecounterbyone}>-</button>
          <span>{item.quantity}</span>
          <button onClick={increaseCounterbyone}>+</button>
        </div>
      }
        </div>
      </div>
     </Modal>

     }
    </Fragment>
  );
};


// const mapStateToProps = (state , ownProps) => {
//     return{
//       item : state.items.find(item => item.id === ownProps.data.id)
//     }
// }
// export default connect(mapStateToProps)(ListItem);
export default ListItem
