import React from 'react';
import { Layout, CartContents, SEO } from 'components';

export default function CartPage() {
  return (
    <Layout>
      <SEO description="Cap Online" title="Cart" />
      <CartContents />
    </Layout>
  );
}
