// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Other
import { auth, createUserProfileDocument } from '../../firebase/utils';
import { setUser } from '../../redux/user';

export const useUserData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          dispatch(setUser({
            id: snapshot.id,
            ...snapshot.data(),
          }));
        });
      } else {
        dispatch(setUser(userAuth));
      }
    });

    return () => {
      unsubscribeFromAuth();
    }
  }, [ auth ]);
};
