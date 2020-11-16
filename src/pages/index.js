import React from 'react';
import {
  Layout,
  SEO,
  HomepageCollectionsGrid,
  FeaturedProducts,
} from 'components';
import ProductContext from 'context/ProductContext';
import {Footer} from '../components/Footer';
// import {DiscussionEmbed} from 'disqus-react'
// import {  useLocation } from '@reach/router';

const IndexPage = () => {
  // const {  origin } = useLocation();
  const { collections } = React.useContext(ProductContext);
//  const baseUrl = `${origin}`;
//  const disqusConfig ={
//    url : baseUrl
//  }
 const disqusShortname = "moroccansaffron-com-2"
  return (
    <Layout>
      <SEO description="The MadHatter store homepage" title="Homepage" />
      <HomepageCollectionsGrid
        collections={
          collections.filter(
            collection => collection.title !== 'Featured Hats'
          ) || []
        }
      />
      {!!collections.find(
        collection => collection.title === 'Featured Hats'
      ) && <FeaturedProducts />}
       

      {/* <DiscussionEmbed shortname = {disqusShortname} config ={disqusConfig} /> */}
      <Footer/>
    </Layout>

  );
};

export default IndexPage;
