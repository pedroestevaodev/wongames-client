import { gql, QueryHookOptions, useQuery } from '@apollo/client';
import { GameFragment } from "./fragments/games";

export type GetWishlistQueryVariables = {
    documentId: string;
};

export type GetWishlistQuery = {
    __typename?: 'Query';
    usersPermissionsUser?: {
        __typename?: 'UsersPermissionsUser';
        wishlist?: {
            __typename?: 'Wishlist';
            id: string;
            games: Array<{
                __typename?: 'Game';
                id: string;
                name: string;
                slug: string;
                price?: number | null;
                developers?: Array<{ __typename?: 'Developer'; name: string } | null> | null;
                cover?: { __typename?: 'UploadFile'; url: string } | null;
            } | null> | null;
        } | null;
    } | null;
};

export const GET_WISHLIST = gql`
    query GetWishlist($documentId: ID!) {
        usersPermissionsUser(documentId: $documentId) {
            wishlist {
                id: documentId
                games {
                    ...GameFragment
                }
            }
        }
    }

    ${GameFragment}
`;

export const useQueryWishlist = (options?: QueryHookOptions<GetWishlistQuery, GetWishlistQueryVariables>) => {
    return useQuery<GetWishlistQuery, GetWishlistQueryVariables>(GET_WISHLIST, {
        errorPolicy: 'all',
        ...options,
    });
};
