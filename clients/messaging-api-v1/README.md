# `messaging-api-v1`

With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the &lt;a href&#x3D;https:&#x2F;&#x2F;tools.ietf.org&#x2F;html&#x2F;draft-kelly-json-hal-08&gt;JSON Hypertext Application Language&lt;&#x2F;a&gt; (HAL) standard.

## Installing

* `yarn add @sp-api-sdk/messaging-api-v1`
* `npm install @sp-api-sdk/messaging-api-v1`

## Getting Started

```javascript
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

const client = new MessagingApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/messaging-api/messaging.md)