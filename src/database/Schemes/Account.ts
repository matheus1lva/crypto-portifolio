export const AccountScheme = {
  name: 'Account',
  properties: {
    _id: 'string',
    apiKey: 'string',
    secretKey: 'string',
    provider: 'string',
  },
  primaryKey: '_id',
};

export interface Account {
  _id: string;
  apiKey: string;
  secretKey: string;
  provider: string;
}
