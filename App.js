import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, Dimensions, location } from 'react-native';
import * as Location from 'expo-location';
const {width: SCREEN_WIDTH } = Dimensions.get("window");

console.log(SCREEN_WIDTH)
export default function App() {
  const[location, setLocation] = useState();
  const[ok, setOk] = userState(True);
  const ask = async() => {
    const permission = await Location.requestPermissionAsync();
    console.log(permission)
  }
  useEffect(()=> {
    ask();
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "tomato"
  },
  city:{
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName:{
    fontSize: 48,
    fontWeight: "500"
  },
  weather:{
  },
  day:{
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp:{
    marginTop: 50,
    fontSize: 178,
  },
  description:{
    marginTop: -30,
    fontSize: 60,
  }
})
