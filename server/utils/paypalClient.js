// paypalClient.js
const paypal = require('@paypal/checkout-server-sdk');

const client = paypal.core.LifecycleClient({
    clientId: process.env.PAYPAL_CLIENT_ID,
    clientSecret: process.env.PAYPAL_CLIENT_SECRET,
    environment: paypal.core.SandboxEnvironment(),
});

module.exports = client;
