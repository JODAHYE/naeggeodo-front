import cookies from 'next-cookies';
import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { END } from 'redux-saga';
import MainTemplate from '../../components/main/MainTemplate';
import { RootState, wrapper } from '../../modules';
import {
  saveAccessToken,
  saveRefreshToken,
  saveUserInfo,
} from '../../modules/login/actions';
import {
  getAllChatRoomsListRequest,
  getChatRoomListWithCategoryRequest,
  getFoodCategoriesActions,
} from '../../modules/main/actions';
import { CategoriesResponse } from '../../modules/main/types';

const ChatRooms = ({
  foodCategories,
}: {
  foodCategories: CategoriesResponse[];
}) => {
  const router: NextRouter = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const { query } = router;
    if (!query.buildingCode) return;
    else if (query.buildingCode && !query.category) {
      dispatch(getAllChatRoomsListRequest(query.buildingCode));
    } else if (query.buildingCode && query.category) {
      dispatch(
        getChatRoomListWithCategoryRequest(query.buildingCode, query.category),
      );
    }
  }, [router, dispatch]);

  return <MainTemplate foodCategories={foodCategories} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    // if (context.req.headers.cookie) {
    const allCookies = cookies(context);
    store.dispatch(saveAccessToken(allCookies.accessToken));

    store.dispatch(saveRefreshToken(allCookies.refreshToken));
    store.dispatch(
      saveUserInfo(allCookies.addr, allCookies.userId, allCookies.type),
    );

    // }

    const rootState: RootState = store.getState();
    if (rootState.mainPageState.categories.length > 0) return;

    store.dispatch(getFoodCategoriesActions.request());

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {
        foodCategories: store.getState().mainPageState.categories,
      },
    };
  },
);
export default ChatRooms;
