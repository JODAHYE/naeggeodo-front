import cookies from 'next-cookies';
import { Store } from 'redux';
import { saveAccessToken, saveUserInfo } from '../modules/login/actions';

export function saveCookies(store: Store, context) {
  if (context?.req?.headers?.cookie) {
    const allCookies = cookies(context);

    store.dispatch(saveAccessToken(allCookies.accessToken));
    store.dispatch(
      saveUserInfo(
        allCookies.address,
        allCookies.buildingCode,
        allCookies.user_id,
      ),
    );
  }
}