
import { useEffect } from "react";
import { ProductComponent } from "../component/Index";
import { fetchProducts } from "../../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../../../redux/products/actions';


export const ProductListing = () => {
  const products = useSelector((state: any) => state);
  const dispatch = useDispatch();


  const handleFetchProducts: VoidFunction = async () => {
    try {
      const response = await fetchProducts();
      dispatch(setProducts(response.data))
    }
    catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchProducts();
  }, [])


  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}
