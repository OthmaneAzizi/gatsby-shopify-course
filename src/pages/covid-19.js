import React from 'react';
import { Layout, SEO } from 'components';
import {Button} from '../components/Button';
import {navigate} from '@reach/router';
const ReturnsRefundsPolicy = () => (
  <Layout>
          <div>
                    <Button onClick={()=> navigate('/')}>
                        Back to Home page
                    </Button>
    </div>
    <SEO title="ReturnsRefundsPolicy" />
    <h1>COVID-19</h1>
    <p>The Spice House is open for business. We have adapted with the circumstances to enhance safety for our employees, customers, and communities. Answers to most of the questions we have received are on this page. If you have other questions, please email support@thespicehouse.com.


</p>
<strong>
Website
</strong>
<p>
Our website is taking orders—more orders than at any time in our 63-year history. Flatpack still ship for free.

We are seeing delays in some shipments handled by UPS Ground and the USPS. Please check our Shipping FAQ for details.

If your order is urgent, please select a premium shipping option for guaranteed fulfillment within 24 hours:

</p><ul>
    <li>
    UPS 2nd Day

    </li>
    <li>
    UPS Next Day
    </li>
</ul>
<strong>Stores</strong>
<p>
Our stores are open. We encourage you to order ahead on our website and pick up at our stores in Chicago, Evanston, and Milwaukee. Click here for step-by-step instructions. You will receive an email when your order is ready.
</p>
<strong>
Safety
</strong>
<p>
You will be responsible for paying for your own shipping costs for returning your item. Shipping
costs are nonrefundable.
If you receive a refund, the cost of return shipping will be deducted from your refund
</p>
<strong>COVID-19</strong>
<p>
The Spice House is registered with the Food and Drug Administration and inspected by local health departments. We have always followed strict food safety standards. This includes documented procedures and required training for all employees. We updated our documented procedures in February to address new threats posed by COVID-19. Specifically, we have:
<ul><li>
Enhanced our already-aggressive sanitization procedures with additional focus on surfaces used for packaging and fulfillment.</li>
<li>Implemented and enforced strict social distancing requirements.</li>
<li>Issued face masks to all employees and required their use at all times.</li>
<li>Discouraged the use of public transportation and made alternative arrangements for employee transportation.</li>
</ul>
To preserve social distancing we created a second shift at our warehouse. Rather than filling our building during daylight hours, we extended the day to make sure everyone has ample space at all times.
</p>
  </Layout>
);

export default ReturnsRefundsPolicy;
