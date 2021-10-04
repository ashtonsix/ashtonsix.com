const user = {
  id: '1',
  createdAt: new Date(2019),

  firstName: 'Ashton',
  lastName: 'Six',
  email: 'me@ashtonsix.com',
  emailTrusted: true,
  emailVerified: true,
  mobile: null,
  postCode: null,
  billingName: null,
  billingAddress: null,

  jupyterNotebookPreferred: true,
  instanceTypes: ['m5', 'p2', 'p5'],
  sendIdleServerEmailAfter: null,
  stopIdleServerAfter: null,

  cudnnAccepted: true,
  analyticsAccepted: true,
  updatesAccepted: true,

  onboardingSshResult: false,
  onboardingCardDetailsResult: true,

  paymentIncrement: 20,
  balance: 200,
  failedChargeSequenceAt: null,
  failedChargeCanRetryAt: null,
  monthlySpendingLimit: 100
}

const instanceList = {
  id: '2',
  count: 1,
  created: 1,
  data: [
    {
      id: 3,
      createdAt: new Date(2019),
      removedAt: null,

      removeScheduledAt: null,
      stateUpdatedAt: null,
      instanceStartedCount: 1,

      prettyName: 'Jessica Melbourne-Thomas',
      prettyNameLink: 'https://en.wikipedia.org/wiki/Jessica_Melbourne-Thomas',

      instanceType: 'p2.xlarge',
      storageSize: 75,

      stateCurrent: 'AT_REST_ONLINE',
      stateNext: null,
      stateDesired: null,
      instanceAddress: '45.39.135.35',
      jupyterToken: 'abc',
      includesJupyterIntegration: true
    }
  ]
}

const spotPricing = [
  {instanceType: 'm5.large', amount: 0.0436},
  {instanceType: 'm5.xlarge', amount: 0.0728},
  {instanceType: 'm5.2xlarge', amount: 0.1743},
  {instanceType: 'm5.4xlarge', amount: 0.3147},
  {instanceType: 'm5.8xlarge', amount: 0.5922},
  {instanceType: 'm5.12xlarge', amount: 0.8232},
  {instanceType: 'm5.24xlarge', amount: 1.6575},
  {instanceType: 'p2.xlarge', amount: 0.27},
  {instanceType: 'p2.8xlarge', amount: 2.16},
  {instanceType: 'p2.16xlarge', amount: 4.32},
  {instanceType: 'p3.2xlarge', amount: 0.918},
  {instanceType: 'p3.8xlarge', amount: 3.672},
  {instanceType: 'p3.16xlarge', amount: 7.344}
]

spotPricing.forEach(p => (p.amount *= 1.15))

const stubs = {user, instanceList, spotPricing}

export default stubs
