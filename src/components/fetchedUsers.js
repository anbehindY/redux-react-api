import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchedUsers, userState } from "../features/users/userSlice";
import { nanoid } from "@reduxjs/toolkit";

export const FetchedUsers = () => {
  const { users, isLoading, error } = useSelector(userState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchedUsers());
  }, [dispatch]);
  console.log(users);
  if (isLoading) return <p>Loading...</p>;
  else if (error) return <p>{error}</p>;
  else
    return (
      <ul>
        {users.map((user) => (
          <li key={nanoid()}>
            <p>First Name:{user.name.first}</p>
            <p>Last Name:{user.name.last}</p>
          </li>
        ))}
      </ul>
    );
};
