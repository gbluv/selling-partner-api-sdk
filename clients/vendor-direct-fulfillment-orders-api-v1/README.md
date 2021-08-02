# `vendor-direct-fulfillment-orders-api-v1`

The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.

## Installing

```sh
yarn add @sp-api-sdk/vendor-direct-fulfillment-orders-api-v1
```

```sh
npm install @sp-api-sdk/vendor-direct-fulfillment-orders-api-v1
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {VendorDirectFulfillmentOrdersApiClient} from '@sp-api-sdk/vendor-direct-fulfillment-orders-api-v1'

const auth = new SellingPartnerApiAuth({
  clientId: '',
  clientSecret: '',
  refreshToken: '',
  secretAccessKey: '',
  accessKeyId: '',
  region: '',
  role: {
    arn: '',
  }
})

const client = new VendorDirectFulfillmentOrdersApiClient({
  auth,
  region: 'eu' // or 'eu-west-1'
})
```

## Handle Rate Limiting

If you want to let the SDK retry after each 429 responses, instanciate the client like this:

```javascript
const client = new VendorDirectFulfillmentOrdersApiClient({
  auth,
  region: 'eu',
  rateLimiting: {
    retry: true,
    onRetry: (retryInfo) => console.log(retryInfo) // Optional
  }
})
```

The SDK gets the rate limits for each routes from the API documentation

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/vendor-direct-fulfillment-orders-api/vendorDirectFulfillmentOrdersV1.md)