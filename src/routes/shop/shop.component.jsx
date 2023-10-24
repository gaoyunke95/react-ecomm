import { useContext } from 'react';
import { CategoryContext } from '../../context/category.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';
import {Route, Routes} from "react-router-dom";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";


const Shop = () => {
    const { products }= useContext(CategoryContext);

    console.log(products);
    return (

        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />

        </Routes>

        // <div className='products-container'>
        //
        //     {
        //         products.map((product) => (
        //                 <ProductCard key={product.id} product = {product}></ProductCard>
        //             )
        //         )
        //     }
        // </div>
    );
}

export default Shop;
