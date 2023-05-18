import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from '../../../services/api';
import { selectedProduct, removeSelectedProduct } from '../../../redux/products/actions';
import { useDispatch, useSelector } from 'react-redux';

export const ProductDetails = () => {
  const product: IProduct = useSelector((state: ProductReducer) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const handleFetchProductDetail: VoidFunction = async () => {
    try {
      const response = await fetchProductDetail(productId);
      dispatch(selectedProduct(response.data));
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (productId && productId !== '') handleFetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <>... Loading</>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">💎</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={product.image} />
              </div>
              <div className="column rp">
                <h1>{product.title}</h1>
                <h2>
                  <a className="ui teal tag label">${product.price}</a>
                </h2>
                <h3 className="ui brown block header">{product.category}</h3>
                <p>{product.description}</p>
                <div className="ui vertical animated button" tabIndex={0}>
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
