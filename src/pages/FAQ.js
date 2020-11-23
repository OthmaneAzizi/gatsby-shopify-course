import React from 'react';
import { Layout, SEO } from 'components';
import {Button} from '../components/Button';
import {navigate} from '@reach/router';
import {Link} from 'gatsby'
const PrivacyPolicy = () => (
  <Layout>
       <div>
                    <Button onClick={()=> navigate('/')}>
                        Back to Home page
                    </Button>
    </div>
    <SEO title="FAQ" />
    <h1>FAQ</h1>
    <strong>What are you doing about COVID-19?</strong>
    <p>Please see our <Link to="../covid-19">COVID</Link>-19 page for details.


<br/>
</p>
<br/>
<strong>How are the spices packed?</strong>
<p>
The Flatpack is fresh spices with free shipping—always. Whether you need a single spice or hundreds of spices, shipping is always free, to US addresses, with the Flatpack. Each Flatpack contains a half cup of spice by volume, which makes the Flatpack a great option for refilling your half cup spice jars. Our gorgeous Flatpack bags are resealable and stand up on their own.

 
</p>
<br/>
<strong>How does shipping work ?</strong>
<p>
We’ve got a whole page for that. Please click <Link to ="../warranty-guarantees">here</Link>.
</p>
<br/>
<strong>
    Feedback
</strong>
<p>
A week or so after you order, you will get an email from us asking how we did. If your spices are not amazing, then please let us know. If a jar broke, a bag came open, or an item is missing, then please say so. Pictures are especially helpful so we can learn from our mistakes.

You can email us anytime at support@thespicehouse.com. You can also call us at 312-676-2414. We answer the phone seven days a week: 10 AM - 7 PM CT Monday-Friday and 10 AM - 5 PM CT on Saturdays and Sundays.
</p>
<br/>
<strong>
    Global shipping
</strong>
<p>
The Spice House ships internationally via DHL to select countries. Check our Global Shipping page for details.

We do not offer free shipping on orders going outside the US or Canada.
</p>
  </Layout>
);

export default PrivacyPolicy;
