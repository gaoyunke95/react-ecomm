import "./category-preview.styles.scss";

import ProductCard from "../product-card/product-card.component";

//remember to destructing
const CategoryPreview = ({title, products}) => {

    console.log("Test");

    return (
            <div className='category-preview-container'>
                <h2>
                    <span className='title'>
                        {title}
                    </span>
                </h2>
                <div className="preview">
                    {products
                        .filter((_, idx) => idx < 4)
                        .map((product =>
                                <ProductCard key={title} product={product}></ProductCard>
                        ))
                    }
                </div>

            </div>

    );
}

export default CategoryPreview;
