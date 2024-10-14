import { clearSessionToken } from '@/access';
import { history, useModel } from '@umijs/max';
import { message } from 'antd';
import React, { useEffect } from 'react';

const SignOut: React.FC = () => {
  const { setInitialState } = useModel('@@initialState');

  useEffect(() => {
    const handleSignOut = async () => {
      // Clear the session token
      clearSessionToken();

      // Reset the initial state
      setInitialState((s) => ({ ...s, currentUser: undefined }));

      message.success('You have been signed out successfully');

      // Redirect to the login page
      history.push('/user/login');
    };

    handleSignOut();
  }, [setInitialState]);

  return null;
};

export default SignOut;
