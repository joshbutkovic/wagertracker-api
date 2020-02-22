export const tokenAuth = `mutation tokenAuth($username:String!, $password:String!) {
    tokenAuth(username:$username, password:$password) {
        token
            user {
                id
                username
            }
        }
    }`;

export const verifyToken = `mutation verifyToken($token:String!) {
    verifyToken(token: $token) {
        payload
    }
}`;
