import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigations/Navigation";
import StackNavigation from "./Navigations/StackNavigation";

export default function App() {
  return <StackNavigation />;
}

const styles = StyleSheet.create({});
