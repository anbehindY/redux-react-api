import { useSelector } from "react-redux";
import { userState } from "../features/users/userSlice";

export const FetchedUsers = () => {
    const users = useSelector(userState.users),
          isLoading = useSelector(userState.isLoading),
          error = useSelector(userState.error);

    let content;
    if (isLoading) content = <p>'Loading...'</p>;
    else if (error) content = <p>{error}</p>;
    else content = <ul>
        {
            users.map((user) => 
                <li key={user.id}>
                    <p>First Name:{user.firstName}</p>
                    <p>Last Name:{user.lastName}</p>
                </li>
            )
        }
    </ul>;

    return (
        <>
            {content}
        </>
    )
};
