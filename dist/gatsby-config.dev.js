"use strict";

require('dotenv').config({
  path: ".env"
});

require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Cap Online Store",
    description: "We're mad about hats",
    author: "@OthmaneAzizi"
  },
  plugins: ["gatsby-plugin-remove-fingerprints", "gatsby-plugin-styled-components", "gatsby-optional-chaining", "gatsby-theme-comments", {
    resolve: "gatsby-plugin-google-fonts",
    options: {
      fonts: ["open sans:400", 'open sans:400i', "open sans:700", 'open sans:700i', "open sans:800", 'open sans:800i']
    }
  }, {
    resolve: "gatsby-plugin-disqus",
    options: {
      shortname: "moroccansaffron-com-2"
    }
  }, {
    resolve: 'gatsby-source-shopify',
    options: {
      shopName: process.env.GATSBY_SHOP_NAME,
      accessToken: process.env.GATSBY_ACCESS_TOKEN,
      apiVersion: '2020-07'
    }
  }, "gatsby-plugin-react-helmet", {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "".concat(__dirname, "/src/images")
    }
  }, "gatsby-transformer-sharp", "gatsby-plugin-sharp", {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "gatsby-starter-default",
      short_name: "starter",
      start_url: "/",
      background_color: "#663399",
      theme_color: "#663399",
      display: "minimal-ui",
      icon: "src/images/gatsby-icon.png"
    }
  }, {
    resolve: "gatsby-plugin-webfonts",
    options: {
      fonts: {
        google: [{
          family: "Open Sans",
          variants: ["400", "700", "800", "400i", "700i", "800i"] //subsets: ['latin']
          //text: 'Hello'
          //fontDisplay: 'swap',
          //strategy: 'selfHosted' // 'base64' || 'cdn'
          // formatAgents: {
          //   eot: `Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)`,
          //   ttf: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8`,
          //   woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
          //   woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
          // },

        }]
      } //formats: ['woff2', 'woff'],
      //useMinify: true,
      //usePreload: true,
      //usePreconnect: false,

    }
  }]
};