import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as Location from "expo-location";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../environments";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 25.089824,
  longitude: 121.490208,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

export default function Map({ navigation, route }) {
  // console.log(route);
  //latitude hook
  const [mapRegion, setMapRegion] = useState({
    latitude: 25.089824,
    longitude: 121.490208,
    // latitudeDelta: LATITUDE_DELTA,
    // longitudeDelta: LONGITUDE_DELTA,
  });

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    let address = await Location.geocodeAsync(route.params.address);
    console.log(address[0].latitude, address[0].longitude);
    setMapRegion({
      latitude: address[0].latitude,
      longitude: address[0].longitude,
      // latitudeDelta: LATITUDE_DELTA,
      // longitudeDelta: LONGITUDE_DELTA,
    });
    // console.log(location.coordinate.latitude, location.coordinate.longitude);
  };

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backbutton}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={35}
            color={"#4EA6EA"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={mapRegion}
        >
          <Marker coordinate={mapRegion} title="Marker" />
        </MapView>
        {/* <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: { GOOGLE_API_KEY },
            language: "zh",
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backbutton: {
    marginLeft: 10,
  },

  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
