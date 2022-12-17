import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ApiDetail({ navigation, route }) {
  return (
    <SafeAreaView style={styles.Conatiner}>
      <View style={styles.backbutton}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons name="arrow-left" size={35} color={"black"} />
        </TouchableOpacity>
      </View>
      <View style={styles.MainContainer}>
        <View style={styles.NameContainer}>
          <Text style={styles.TitleTextStyle}>補習班名稱:</Text>
          <Text style={styles.TextStyle}>{route.params.短期補習班名稱}</Text>
        </View>
        <View style={styles.RegionContainer}>
          <Text style={styles.TitleTextStyle}>地區:</Text>
          <Text style={styles.TextStyle}>{route.params.地區縣市}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Map", { address: route.params.地址 })
          }
        >
          <View style={styles.AddressContainer}>
            <Text style={styles.TitleTextStyle}>地址:</Text>
            <Text style={styles.TextStyle}>{route.params.地址}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.CategoryNTimeContainer}>
          <View style={styles.CategoryContainer}>
            <Text style={styles.TitleTextStyle}>類別:</Text>
            <Text style={styles.TextStyle}>{route.params.短期補習班類別}</Text>
          </View>
          <View style={styles.TimeContainer}>
            <Text style={styles.TitleTextStyle}>立案時間:</Text>
            <Text style={styles.TextStyle}>{route.params.立案時間}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.EmailContainer}>
            <Text style={styles.TitleTextStyle}>電子郵件:</Text>
            <Text style={styles.TextStyle}>{route.params.電子郵件}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AddressContainer: {
    backgroundColor: "#7BD884",
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  backbutton: {
    marginLeft: 10,
  },

  Conatiner: {
    flex: 1,
    backgroundColor: "#49A853",
  },

  CategoryContainer: {
    backgroundColor: "#7BD884",
    flex: 1,
    marginVertical: 5,
    marginRight: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  CategoryNTimeContainer: {
    flexDirection: "row",
  },

  EmailContainer: {
    backgroundColor: "#7BD884",
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  MainContainer: {
    margin: 10,
    marginVertical: 5,
  },

  NameContainer: {
    backgroundColor: "#7BD884",
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  RegionContainer: {
    backgroundColor: "#7BD884",
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  TitleTextStyle: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 5,
  },

  TextStyle: {
    fontSize: 25,
  },

  TimeContainer: {
    backgroundColor: "#7BD884",
    flex: 1,
    marginVertical: 5,
    marginLeft: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
