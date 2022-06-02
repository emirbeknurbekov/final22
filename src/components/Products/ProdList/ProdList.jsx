import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../../../Contexts/ProductContextProvider";
import { PRODUCTS_LIMIT } from "../../../Helpers/const";
import Spinner from "../../Spinner/Spinner";
import OneProduct from "../OneProduct/OneProduct";
import Pagination from "@mui/material/Pagination";
import Filter from "../Filter/Filter";
import FilterListIcon from "@mui/icons-material/FilterList";

const maxSliderValue = 5000;
const minSliderValue = 1;

const ProdList = () => {
  const { getProducts, products, pageTotalCount } = useProductContext();
  // console.log(getProducts);
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  const [page, setPage] = useState(+searchParams.get("_page") || 1);
  // console.log(page);
  const [type, setType] = useState(searchParams.get("type") || "all");
  // console.log(type);
  const [slider, setSlider] = useState(
    +searchParams.get("price_gte") || minSliderValue
  );
  // console.log(slider);

  const paramsWithType = () => {
    return {
      _limit: PRODUCTS_LIMIT,
      _page: page,
      type: type,
      price_gte: slider,
      q: searchParams.get("q") || "",
    };
  };

  const paramsNoType = () => {
    return {
      _limit: PRODUCTS_LIMIT,
      _page: page,
      price_gte: slider,
      q: searchParams.get("q") || "",
    };
  };

  const [filter, setFilter] = useState(false);

  const funcFilter = () => {
    if (filter !== true) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  // Чтобы в самом начале компонента установить query params === параметры запроса, и именно по ним делать запрос getProducts()
  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
      // console.log(alert("1"));
    } else {
      setSearchParams(paramsNoType());
      // console.log(alert("2"));
    }
  }, []);

  // отрабатывает каждый раз как меняется query params === параметры запроса
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    if (type === "all") {
      setSearchParams(paramsNoType());
      // alert("3");
    } else {
      setSearchParams(paramsWithType());
      // alert("4");
    }
  }, [page, type, slider]);

  const handleReset = () => {
    setType("all");
    setSlider(minSliderValue);
    setSearchParams({
      _limit: PRODUCTS_LIMIT,
      _page: page,
      price_gte: minSliderValue,
      q: "",
    });
  };

  return (
    <div>
      <div
        data-aos="fade-down"
        data-aos-delay="150"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            fontSize: "1.5rem",
            color: "black",
            textTransform: "lowercase",
            fontWeight: 700,
          }}
          onClick={() => funcFilter()}
        >
          <FilterListIcon fontSize="large" />
        </Button>
      </div>
      <div style={{ display: filter ? "block" : "none" }}>
        <Filter
          type={type}
          setType={setType}
          setPage={setPage}
          slider={slider}
          setSlider={setSlider}
          maxSliderValue={maxSliderValue}
          minSliderValue={minSliderValue}
          handleReset={handleReset}
        />
      </div>

      <br />
      <Grid container spacing={2}>
        {products && products.length > 0 ? (
          products.map((item) => <OneProduct key={item.id} item={item} />)
        ) : (
          <Spinner />
        )}
      </Grid>
      <div style={{ margin: "50px 0", textAlign: "center" }}>
        <Pagination
          sx={{ display: "inline-block" }}
          count={pageTotalCount}
          variant="outlined"
          color="primary"
          onChange={(e, pageVal) => setPage(pageVal)}
          page={page}
        />
      </div>
    </div>
  );
};

export default ProdList;
