import React from 'react';
import { Layout, SEO } from 'components';
import {Button} from '../components/Button';
import {navigate} from '@reach/router';
const WarrantyGuarantees = () => (
  <Layout>
          <div>
                    <Button onClick={()=> navigate('/')}>
                    Back to Home page
                    </Button>
    </div>
    <SEO title="Warranty Guarantees" />
    <h1>Warranty Guarantees</h1>
<strong>Authentic</strong>
<p>
    The caps we provide respect high standard of quality ,Our hat collection is entirely tested by our experts
</p>
<br/>
<strong>Shipping</strong>
<p>
Our products are shipped from the farm of origin straight through to the Essential Spice storage facilities and then shipped directly to you
</p>
<br/>
<strong>Flatpacks , USPS and Amazon</strong>
<p>
    We do work with many shipping providers , it depends on the amount spent +100$ are shipped using premium shipping USPS Next day or Amazon prime services
    <br/>
    Flatpacks is a low coast shipping facility that we provide in collaboration with usps or the moroccan post services most often used with low quantities
</p>
<br/>
<strong>USPS Delivery Delays</strong>
<p>
The United States Postal Service (USPS) is struggling with increased package volume and decreased revenue, each of which is related to COVID-19. Most of our free shipping is delivered by the USPS. This includes free shipping on orders over $100 and flatpack free shipping. These economy shipping services are the most prone to delay. To minimize the chance of delivery delays, we encourage customers to select UPS Ground.
</p>
<strong>A lot or A little</strong>
<p>
    Just want to try ? We propose all quantities 
</p>
<p>
All of our products are sold in quantities that support large manufacturers as well as personal needs
</p>
  </Layout>
);

export default WarrantyGuarantees;
