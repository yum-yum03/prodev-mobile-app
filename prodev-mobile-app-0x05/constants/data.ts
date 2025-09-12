import { PropertyListingProps } from "@/interfaces";

export const listings: PropertyListingProps[] = [
  {
    propertyName: "Modern Villa",
    currency: "$",
    amount: 1200,
    location: { street: "123 Sunset Blvd", city: "Los Angeles", country: "USA" },
    favorite: true,
  },
  {
    propertyName: "Cozy Apartment",
    currency: "€",
    amount: 800,
    location: { street: "456 Rue de Paris", city: "Paris", country: "France" },
    favorite: false,
  },
];
