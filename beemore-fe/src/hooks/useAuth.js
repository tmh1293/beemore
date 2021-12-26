import React from 'react';
import { AuthContext } from '../App';

export default function useAuth() {
  const { user, setUser, setStatus } = React.useContext(AuthContext);

  return { user, setUser, setStatus }
}