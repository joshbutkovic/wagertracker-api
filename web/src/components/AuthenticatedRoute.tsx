import React, { useEffect } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { BASE } from '../config/urls';
import { verifyToken } from '../graphql/mutations';

export interface AuthenticatedRouteProps extends RouteProps {
    component: React.FC;
}

const GET_TOKEN = gql`
    {
        tokenAuth @client {
            token
        }
    }
`;

// mutation tokenAuth {
//   tokenAuth(username:"joshb_lv", password: "Elizabeth@4231!") {
//     token
//     user {
//       id
//       username
//     }
//   }
// }

// mutation verifyToken {
//     verifyToken(token: "") {
//         payload
//     }
// }

function AuthenticatedRoute({ component: Component, path, ...props }: AuthenticatedRouteProps) {
    const { data } = useQuery(GET_TOKEN);

    // const result2 = useQuery(GET_BREEDS, {
    //     skip: !data,
    //     variables: { dogId: data && data.dogs[0].id },
    // });

    console.log('data: ', data);
    // console.log('client: ', client);

    // useEffect(() => {
    //     if (token) {
    //         axios
    //             .post(BASE, {
    //                 query: verifyToken,
    //                 variables: {
    //                     token,
    //                 },
    //             })
    //             .then(res => {
    //                 const { data } = res.data;
    //                 if (data.verifyToken) setCookie('verifyToken', data.verifyToken);
    //             });
    //     }
    // }, [token, setCookie]);

    // const checkCookieForValidToken = () => {
    //     if (typeof cookies.verifyToken !== 'undefined') {
    //         if (cookies.verifyToken.payload.exp < new Date().getTime() / 1000) {
    //             removeCookie('verifyToken');
    //             return false;
    //         } else {
    //             console.log('cookies: ', cookies);
    //             setAuth(
    //                 {
    //                     id: cookies.tokenAuth.user.id,
    //                     token: cookies.tokenAuth.token,
    //                     username: cookies.tokenAuth.user.username,
    //                 },
    //                 dispatch,
    //             );
    //             return true;
    //         }
    //     }
    // };

    // if (!token && !checkCookieForValidToken()) {
    //     return <Redirect to="login" />;
    // } else {
    //     const verifiedComponent = (componentProps: any) => <Component {...componentProps} />;
    //     return <Route path={path} render={verifiedComponent} {...props} />;
    // }
    return null;
}

export default AuthenticatedRoute;
