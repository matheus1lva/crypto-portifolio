import Realm from 'realm';
import {AccountScheme} from './Schemes';

export async function openConnection() {
  const realm = await Realm.open({
    path: './database',
    schema: [AccountScheme],
  });
  return realm;
}
