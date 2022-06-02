import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS, API2, PRODUCTS_LIMIT } from "../Helpers/const";
import { useAuth } from "./AuthContextProvider";

export const userContext = createContext();

export const useUserContext = () => {
  return useContext(userContext);
};

const INIT_STATE = {
  comment: [],
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
      };
  }
}

const CommentContextProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getComment = async (id) => {
    try {
      let res = await axios.get(`${API2}?prodId=${id}`);
      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addComment = async (newProduct) => {
    if (currentUser.isLogged) {
      try {
        let res = await axios.post(API2, newProduct);
        getComment(newProduct.prodId);
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login");
    }
  };

  const deleteComment = async (item) => {
    try {
      let res = await axios.delete(`${API2}/${item.id}`);
      getComment(item.prodId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <userContext.Provider
      value={{
        addComment,
        getComment,
        deleteComment,
        products: state.products,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default CommentContextProvider;
