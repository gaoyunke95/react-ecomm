import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {CategoryContext} from "../../context/category.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";
const Category = () => {

    const {category} = useParams();
    const {categoriesMap} = useContext(CategoryContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    console.log(categoriesMap[category])
    useEffect(()=> {
        setProducts(categoriesMap[category]);
        console.log(products);
    }, [category, categoriesMap]);

    return (
        <div className="category-container">
            {console.log(products)}
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            {
                products && products.map((product)=>
                    <ProductCard key={product.id} product={product}></ProductCard>
                )
            }
        </div>
    )



}

export default Category;
