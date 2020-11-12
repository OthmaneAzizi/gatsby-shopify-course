import React from 'react';
import { Layout, SEO } from 'components';
import {Button} from '../components/Button';
import {navigate} from '@reach/router';
const WarrantyGuarantees = () => (
  <Layout>
          <div>
                    <Button onClick={()=> navigate(-1)}>
                        Back to Home page
                    </Button>
    </div>
    <SEO title="Warranty Guarantees" />
    <h1>Warranty Guarantees</h1>
<strong>Authentic</strong>
<p>
    The saffron we provide respect high standard of quality , Moroccan saffron of Tiliwin is recognized to be the king of saffron
</p>
<strong>Shipping</strong>
<p>
Our products are shipped from the farm of origin straight through to the Essential Spice storage facilities and then shipped directly to you
</p>
<strong>A lot or A little</strong>
<p>
    Just want to try ? We propose all quantities 
</p>
<p>
All of our products are sold in quantities that support large manufacturers and restaurant operations all the way down to small independent restaurants, bakeries, and the home based gourmet cook
</p>
  </Layout>
);

export default WarrantyGuarantees;
