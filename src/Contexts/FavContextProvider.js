import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { FAV } from "../Helpers/const";
import { useAuth } from "./AuthContextProvider";

const favContext = createContext();

export const useFav = () => {
  return useContext(favContext);
};

const INIT_STATE = {
  fav: JSON.parse(localStorage.getItem("fav")),
  favLength: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FAV.GET_FAV_LENGTH:
      return {
        ...state,
        favLength: action.payload,
      };
    case FAV.GET_FAV: {
      return {
        ...state,
        fav: action.payload,
      };
    }
    default:
      return state;
  }
}

const FavContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  function creatFavFromLS() {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        products: [],
        totalPrice: 0,
      };
      localStorage.setItem("fav", JSON.stringify(fav));
    }
    return fav;
  }

  // add adn delete

  const addDelFav = (prod) => {
    if (currentUser.isLogged) {
      let fav = creatFavFromLS();
      let newProd = {
        item: prod,
        count: 1,
        subPrice: prod.price,
      };

      let checkProdInFav = fav.products.some((obj) => {
        return obj.item.id === prod.id;
      });
      if (checkProdInFav) {
        fav.products = fav.products.filter((obj) => {
          return obj.item.id !== prod.id;
        });
      } else {
        fav.products.push(newProd);
      }
      console.log(fav, "fav");

      // fav.totalPrice = calcTotalPrice(fav.products);
      localStorage.setItem("fav", JSON.stringify(fav));
      getFavLength();

      dispatch({
        type: FAV.GET_FAV,
        payload: fav,
      });
    } else {
      navigate("/login");
    }
  };

  const getFavLength = () => {
    let fav = creatFavFromLS();
    dispatch({
      type: FAV.GET_FAV_LENGTH,
      payload: fav.products.length,
    });
  };
  const isProdInFav = (id) => {
    let fav = creatFavFromLS();

    let exist = fav.products.some((obj) => {
      return obj.item.id === id;
    });
    return exist;
  };

  const getFav = () => {
    let fav = creatFavFromLS();
    dispatch({
      type: FAV.GET_FAV,
      payload: fav,
    });
  };

  const changeProductCount = (newCount, id) => {
    let fav = creatFavFromLS();
    fav.products = fav.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = newCount;
        // elem.subPrice = calSubFav(elem);
      }
      return elem;
    });
    // fav.totalPrice = calcTotalFav(fav.products);
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
  };

  const deleteProdInFav = (id) => {
    let fav = creatFavFromLS();
    fav.products = fav.products.filter((elem) => {
      return elem.item.id !== id;
    });
    //   fav.totalPrice = calcTotalPrice(fav.products);
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
    getFavLength();
  };

  return (
    <favContext.Provider
      value={{
        favLength: state.favLength,
        fav: state.fav,
        addDelFav,
        getFavLength,
        isProdInFav,
        getFav,
        changeProductCount,
        deleteProdInFav,
      }}
    >
      {children}
    </favContext.Provider>
  );
};

export default FavContextProvider;
