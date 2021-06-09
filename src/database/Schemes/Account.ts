export const AccountScheme = {
  name: 'Account',
  properties: {
    _id: 'int',
    apiKey: 'string',
    secretKey: 'string',
    provider: 'string',
  },
  primaryKey: '_id',
};

export interface Account {
  _id: number;
  apiKey: string;
  secretKey: string;
  provider: string;
}
