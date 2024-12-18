import PropTypes from "prop-types";
import { Skeleton } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="skeleton-container">
        <Skeleton variant="rectangular" width={"300px"} height={"180px"} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={"200px"} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width={"150px"} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width={"100px"} />
        <Skeleton
          variant="rounded"
          sx={{ fontSize: "1.5rem", borderRadius: "50px" }}
          width={"100px"}
        />
      </div>
    );
  }

  return (
    <div className="item-list-container">
      {items.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};

// ✅ Añadir propTypes para validar 'items'
ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
