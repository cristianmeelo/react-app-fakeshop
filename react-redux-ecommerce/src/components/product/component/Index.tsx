import { useSelector } from "react-redux";

export const ProductComponent = () => {
    const products = useSelector((state: any) => state.allProducts.products);
    const { id, title } = products[0];

    return (
        <div className="four column wide">
            <div className="ui link cards">
                <div className="card">
                    <div className="image"></div>
                    <div className="content">
                        <div className="header">
                            {title}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
