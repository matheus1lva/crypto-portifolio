import Realm from 'realm';
import {AccountScheme} from './Schemes';

export function getRealm() {
  return Realm.open({
    schema: [AccountScheme],
    deleteRealmIfMigrationNeeded: true,
  });
}
