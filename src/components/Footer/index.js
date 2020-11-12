import React from 'react';
import {FooterWrapper, List , ListItem} from './styles';
import {Cart} from '../Cart';
import {Search} from '../Search'
import {Link} from 'gatsby'
import {Logo} from '../Logo'
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
        Warranty Policy and Guarantees
      </Link>
  </ListItem>
  <ListItem>
  <Link to = '/returns-refunds-policy'>
        Returns and Refunds Policy
      </Link>
  </ListItem>
</List>
       </FooterWrapper>
}