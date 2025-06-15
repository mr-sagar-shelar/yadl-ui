export interface ShapeDetails {
  name: string;
  icon: string;
}

export interface ShapeNames {
  [key: string]: ShapeDetails;
}

export const ShapeNames: ShapeNames = {
  aWSAppIntegrationAPIGateway: {
    name: "API Gateway",
    icon: "AWSAppIntegrationAPIGateway",
  },
};
