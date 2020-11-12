import React from 'react';
import { Layout, SEO } from 'components';
import {Button} from '../components/Button';
import {navigate} from '@reach/router';
const PrivacyPolicy = () => (
  <Layout>
       <div>
                    <Button onClick={()=> navigate(-1)}>
                        Back to Home page
                    </Button>
    </div>
    <SEO title="Privacy Policy" />
    <h1>Privacy Policy</h1>
    <p>We collect your personal information in order to provide and continually improve our products and services.

Here are the types of personal information we collect: 
<br/>
</p>
<strong>Information You Give Us:</strong>
<p>
We receive and store any information you provide in relation to Amazon Services. Click here to see examples of what we collect. You can choose not to provide certain information, but then you might not be able to take advantage of many of our Amazon Services.
</p>
<strong>Automatic Information:</strong>
<p>
We automatically collect and store certain types of information about your use of Amazon Services, including information about your interaction with content and services available through Amazon Services. Like many websites, we use "cookies" and other unique identifiers, and we obtain certain types of information when your web browser or device accesses Amazon Services and other content served by or on behalf of Amazon on other websites. Click here to see examples of what we collect.
</p>
  </Layout>
);

export default PrivacyPolicy;
