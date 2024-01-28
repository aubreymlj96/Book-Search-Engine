import { gpl } from '@apollo/client';

export const GET_ME = gpl`
    query user($username: String!){
        user(username: $username){
            _id
            username
            email
            books{
                _id
                bookId
            }
        }
    }
`;

