/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EditHouseQuery
// ====================================================

export interface EditHouseQuery_house_nearby {
  __typename: "House";
  id: string;
  latitude: number;
  longitude: number;
}

export interface EditHouseQuery_house {
  __typename: "House";
  id: string;
  userId: string;
  address: string;
  publicId: string;
  bedrooms: number;
  latitude: number;
  longitude: number;
  image: string;
  nearby: EditHouseQuery_house_nearby[];
}

export interface EditHouseQuery {
  house: EditHouseQuery_house | null;
}

export interface EditHouseQueryVariables {
  id: string;
}
