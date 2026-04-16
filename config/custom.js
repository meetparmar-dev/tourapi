/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  jwtSecret: process.env.JWT_SECRET,

  email: {
    from: '"Traveling Tours" <verify@traveling.com>',
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a975d875a5f2d3",
      pass: "7fd9956a7dfb2e"
    }
  },
  baseUrl: 'http://localhost:1337',
  frontendUrl: 'http://localhost:5173',

  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY

};
