const CHANGE_CART_AMOUNT = "CHANGE_CART_AMOUNT";
export const cartInitialState = {
  cartList: [{
    price: 250,
    name: "Ford 2019",
    imgUrl: "/assets/images/products/Automotive/1.Ford2019.png",
    id: "7222243834583537",
    qty: 1
  }, {
    price: 250,
    name: "Porsche 2020",
    imgUrl: "/assets/images/products/Automotive/28.Porsche2020.png",
    id: "38553442244076086",
    qty: 1
  }, {
    price: 250,
    name: "Heavy 20kt Gold Necklace",
    imgUrl: "/assets/images/products/Fashion/Jewellery/9.Heavy20ktGoldNecklace.png",
    id: "9573201630529315",
    qty: 1
  }]
};
export const cartReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_CART_AMOUNT:
      let cartList = state.cartList;
      let cartItem = action.payload;
      let exist = cartList.find(item => item.id === cartItem.id);
      if (cartItem.qty < 1) return {
        cartList: cartList.filter(item => item.id !== cartItem.id)
      };else if (exist) return {
        cartList: cartList.map(item => {
          if (item.id === cartItem.id) return { ...item,
            qty: cartItem.qty
          };else return item;
        })
      };else return {
        cartList: [...cartList, cartItem]
      };

    default:
      {
        return state;
      }
  }
};