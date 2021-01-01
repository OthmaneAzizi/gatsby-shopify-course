import React from 'react';
import ProductContext from 'context/ProductContext';
import { CategoryFilterItem } from './CategoryFilterItem';
import { FiltersWrapper } from './styles';

export function Filters() {
  const { collections } = React.useContext(ProductContext);
  var collectionss = collections.filter(
    collection => collection.title.includes('Hats') || collection.title ==='ON SALE'
  );

  return (
    <FiltersWrapper>
      <strong>Categories</strong>
      {collectionss.map(collection => (
        <CategoryFilterItem
          title={collection.title}
          key={collection.shopifyId}
          id={collection.shopifyId}
        />
      ))}
    </FiltersWrapper>
  );
}
