import {createContext, useEffect, useState} from 'react';

import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

export const CategoryContext = createContext({
  // products: [],
  categoriesMap: {},
});



export const CategoryProvider = ({ children }) => {
  // const [products, setProducts] = useState([]);
  const [categoriesMap, setCategoriesMap] = useState({});

  const value = { categoriesMap };

  //only use once for fetch the data into database
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // },[])

  useEffect( ()=> {
    // const categoryMap =  await getCategoriesAndDocuments('categories');

    const getCategoryMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments('categories');
      console.log(categoriesMap);
      setCategoriesMap(categoriesMap);
    };

    // console.log(categoryMap);

    getCategoryMap();
  }, [])

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
