import React from 'react';
import {FooterWrapper, List , ListItem} from './styles';

import {Link} from 'gatsby'

export function Footer(){
    return <FooterWrapper>
<List>
  <ListItem>
      <Link to = '/terms-of-use'>
        Terms of Use
      </Link>
  </ListItem>
  <ListItem>
  <Link to = '/privacy-policy'>
        Privacy Policy
      </Link>
  </ListItem>
  <ListItem>
  <Link to = '/warranty-guarantees'>
        Warranty
      </Link>
  </ListItem>
  <ListItem>
  <Link to = '/returns-refunds-policy'>
        Refund Policy
      </Link>
  </ListItem>
</List>
       </FooterWrapper>
}