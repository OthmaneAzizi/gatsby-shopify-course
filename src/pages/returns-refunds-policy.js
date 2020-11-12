import React from 'react';
import { Layout, SEO } from 'components';
import {Button} from '../components/Button';
import {navigate} from '@reach/router';
const ReturnsRefundsPolicy = () => (
  <Layout>
          <div>
                    <Button onClick={()=> navigate(-1)}>
                        Back to Home page
                    </Button>
    </div>
    <SEO title="ReturnsRefundsPolicy" />
    <h1>Returns Refunds Policy</h1>
    <p>Thanks for shopping at My Site (change this).
If you are not entirely satisfied with your purchase, we're here to help.
</p>
<strong>
    Returns
</strong>
<p>
You have 30 calendar days to return an item from the date you received it.
To be eligible for a return, your item must be unused and in the same condition that you received it.
Your item must be in the original packaging.
Your item needs to have the receipt or proof of purchase.

</p>
<strong>Refunds</strong>
<p>
Once we receive your item, we will inspect it and notify you that we have received your returned
item. We will immediately notify you on the status of your refund after inspecting the item.
If your return is approved, we will initiate a refund to your credit card (or original method of
payment).
You will receive the credit within a certain amount of days, depending on your card issuer's policies.

</p>
<strong>
    Shipping
</strong>
<p>
You will be responsible for paying for your own shipping costs for returning your item. Shipping
costs are nonrefundable.
If you receive a refund, the cost of return shipping will be deducted from your refund
</p>
<strong>Contact Us</strong>
<p>
If you have any questions on how to return your item to us, contact us at : az.othmann@gmail.com
</p>
  </Layout>
);

export default ReturnsRefundsPolicy;
