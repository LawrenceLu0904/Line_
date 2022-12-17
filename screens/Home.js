import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function Home() {
  const navigation = useNavigation();

  //the original json data
  const [data, setData] = useState([]);

  //the json data that needs to be filter later
  const [filteredData, setFilteredData] = useState([]);

  //loading animation
  const [isLoading, setIsLoading] = useState(true);

  //check if there's any error when calling the API
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://bsb.kh.edu.tw/afterschool/opendata/afterschool_json.jsp?city=20"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoading(false);
          setData(result);
          setFilteredData(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

  const item = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("ApiDetail", item)}>
        <View style={styles.itemContainer}>
          <Text style={styles.NumberText}>{item.主管機關文件單位代碼}</Text>
          <Text style={styles.RegionText}>{item.地區縣市}</Text>
          <Text style={styles.AfterSchoolNameText}>{item.短期補習班名稱}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  //   const scrollY = useRef(new Animated.Value(0)).current;
  const searchName = (input) => {
    // let newdata = filteredData;
    let searchData = filteredData.filter((item) => {
      if (input === null) {
        item.主管機關文件單位代碼;
      } else {
        return (
          item.短期補習班名稱.includes(input) ||
          item.主管機關文件單位代碼.includes(input)
        );
      }
    });
    setFilteredData(searchData);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <>
          <View style={styles.titleConatiner}>
            <Text style={styles.titleText}>Choose your Afterschools!</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Search"
              onChangeText={(input) => {
                searchName(input);
              }}
            />
          </View>
          <FlatList
            data={filteredData}
            renderItem={item}
            // renderItem={({ item }) => (
            //   <TouchableOpacity
            //     onPress={() => navigation.navigate("ApiDetail", item)}
            //   >
            //     <View style={styles.itemContainer}>
            //       <Text style={styles.NumberText}>
            //         {item.主管機關文件單位代碼}
            //       </Text>
            //       <Text style={styles.RegionText}>{item.地區縣市}</Text>
            //       <Text style={styles.AfterSchoolNameText}>
            //         {item.短期補習班名稱}
            //       </Text>
            //     </View>
            //   </TouchableOpacity>
            // )}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AfterSchoolNameText: {
    fontSize: 20,
    paddingTop: 10,
    fontWeight: "bold",
  },
  itemContainer: {
    backgroundColor: "#7BD884",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  inputContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    width: 360,
    height: 40,
    padding: 5,
    paddingLeft: 15,
    marginBottom: 10,
    borderRadius: 20,
  },

  mainContainer: {
    backgroundColor: "#49A853",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  NumberText: {
    fontSize: 20,
  },

  RegionText: {
    fontSize: 20,
    paddingTop: 5,
  },

  scrollConatiner: {
    display: "flex",
    flex: 1,
    width: 370,
  },

  titleConatiner: {
    width: 350,
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  titleText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
