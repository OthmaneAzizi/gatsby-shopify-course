import React from 'react';
import {
  Layout,
  SEO,
  HomepageCollectionsGrid,
  FeaturedProducts,
} from 'components';
import ProductContext from 'context/ProductContext';
import { FooterContainer } from '../containers/footer'
// import {DiscussionEmbed} from 'disqus-react'
// import {  useLocation } from '@reach/router';

const IndexPage = () => {
  // const {  origin } = useLocation();
  const { collections } = React.useContext(ProductContext);
//  const baseUrl = `${origin}`;
//  const disqusConfig ={
//    url : baseUrl
//  }

  return (
    <>
    <Layout>
      <SEO description="Morrocan saffron Home page" title="Homepage" />
      <HomepageCollectionsGrid
        collections={
          collections.filter(
            collection => collection.title !== 'Featured'
          ) || []
        }
      />
      {!!collections.find(
        collection => collection.title === 'Featured'
      ) && <FeaturedProducts />}
       

      {/* <DiscussionEmbed shortname = {disqusShortname} config ={disqusConfig} /> */}
     
    </Layout>
    <FooterContainer/>
    </>

  );
};

export default IndexPage;
