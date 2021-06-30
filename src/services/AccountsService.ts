import {getRealm} from '../database';
import 'react-native-get-random-values';
import {nanoid} from 'nanoid';

export class AccountService {
  async createAccount(apiKey: string, secretKey: string, provider: string) {
    let account = null;
    const realm = await getRealm();

    realm.write(() => {
      // @ts-ignore
      account = realm.create('Account', {
        apiKey,
        secretKey,
        provider,
        _id: nanoid(),
      });
    });

    return account;
  }

  async getAccount(id: string) {
    const realm = await getRealm();

    return realm.objectForPrimaryKey('Account', id);
  }

  async getAllAccounts() {
    const realm = await getRealm();
    return realm.objects('Account');
  }
}
