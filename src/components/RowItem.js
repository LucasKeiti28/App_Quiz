import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export const RowItem = ({ onPress = () => {}, name, color }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.row, { backgroundColor: color }]}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#7159c1",
    marginBottom: 1
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600"
  }
});
