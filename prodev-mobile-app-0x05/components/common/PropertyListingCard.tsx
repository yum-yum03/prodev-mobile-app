import { View, Text, Image, StyleSheet } from "react-native";
import { PropertyListingProps } from "@/interfaces";

export default function PropertyListingCard({ propertyName, location, amount, currency }: PropertyListingProps) {
  return (
    <View style={styles.card}>
      <Image source={require("@/assets/images/mansion.png")} style={styles.image} />
      <Text style={styles.title}>{propertyName}</Text>
      <Text style={styles.subtitle}>{location.city}, {location.country}</Text>
      <Text style={styles.price}>{currency}{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 10, backgroundColor: "#fff", padding: 10, marginBottom: 12 },
  image: { width: "100%", height: 150, borderRadius: 8 },
  title: { fontSize: 16, fontWeight: "bold", marginTop: 6 },
  subtitle: { fontSize: 14, color: "#555" },
  price: { fontSize: 14, color: "#34967C", marginTop: 4 },
});
