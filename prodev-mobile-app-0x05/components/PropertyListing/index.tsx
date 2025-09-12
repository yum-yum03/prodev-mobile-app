import { FlatList } from "react-native";
import PropertyListingCard from "@/components/common/PropertyListingCard";
import { PropertyListingProps } from "@/interfaces";
import { listings } from "@/constants/data";

export default function PropertyListing() {
  return (
    <FlatList
      data={listings}
      keyExtractor={(item: PropertyListingProps) => item.propertyName}
      renderItem={({ item }) => <PropertyListingCard {...item} />}
    />
  );
}
