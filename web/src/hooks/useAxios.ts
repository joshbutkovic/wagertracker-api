import React, { useState, useEffect } from 'react';
import { BASE } from '../config/urls';
import { verifyToken } from '../graphql/mutations';

// const useQuery = (url: string, param: any) => {
//     const [data, setData] = useState(undefined);
//     // const token = useSelector((state: Auth) => state.auth.token);

//     // empty array as second argument equivalent to componentDidMount
//     useEffect(() => {
//         async function fetchData() {
//             const response = await axios.post(BASE, {
//                 query: verifyToken,
//                 variables: {
//                     token: 'token',
//                 },
//             });
//             // const json = await response.json();
//             // setData(json);
//         }
//         fetchData();
//     }, [url, param]);

//     return data;
// };
