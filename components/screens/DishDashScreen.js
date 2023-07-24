import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Animated,
} from "react-native";

import { ImageBackground } from "react-native";

function DishDashScreen(props) {
  const [loading, setLoading] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0.6);

  const titleFadeAnim = useRef(new Animated.Value(0)).current;

  const buttonFadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const sequence = Animated.sequence([
      Animated.timing(titleFadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        delay: 1000,
      }),
      Animated.timing(buttonFadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        delay: 500,
      }),
    ]);
    sequence.start();
  }, [titleFadeAnim, buttonFadeAnim]);
  

  useEffect(() => {
    if (loading) {
      setOpacity(0.2); // set opacity to 0.2 when loading is true
    } else {
      setOpacity(0.6); // set opacity to 0.6 when loading is false
    }
  }, [loading]);

  const navigateToRecipes = (screen) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.navigation.navigate(screen);
    }, 500);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/bgImage.jpeg")}
        style={{ flex: 1, alignItems: "center", resizeMode: "cover" }}
        imageStyle={{ opacity: opacity, width: "100%" }}
      >
        <Animated.Text style={[styles.title, { opacity: titleFadeAnim }]}>
          DishDash
        </Animated.Text>
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateToRecipes("Favourites")}
          >
            <Animated.Text style={[styles.buttonText, { opacity: buttonFadeAnim }]}>My Recipes</Animated.Text>
          </TouchableOpacity>
          <Animated.Text style={[styles.buttonDescription, { opacity: buttonFadeAnim }]}>
            View all available recipes
          </Animated.Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.button} onPress={()=>navigateToRecipes("Recipes")}>
            <Animated.Text style={[styles.buttonText, {opacity: buttonFadeAnim}]}>Random Recipe</Animated.Text>
          </TouchableOpacity>
          <Animated.Text style={[styles.buttonDescription, { opacity: buttonFadeAnim }]}>
            Here you can search for a random recipe
          </Animated.Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateToRecipes("AdvancedSearch")}
          >
            <Animated.Text style={[styles.buttonText, { opacity: buttonFadeAnim }]}>Advanced Search</Animated.Text>
          </TouchableOpacity>
          <Animated.Text style={[styles.buttonDescription, { opacity: buttonFadeAnim }]}>
            Recipes that include a specific ingredient
          </Animated.Text>
        </View>

        {loading && <ActivityIndicator size="large" color="blue" />}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ff8b00",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 80,
  },
  box: {
    width: "95%",
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
  },
  button: {
    backgroundColor: "orange",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonDescription: {
    color: "black",
    fontSize: 17,
    textAlign: "center",
    marginBottom: 5,
    backgroundColor: "#cfcfcf",
    padding: 5,
    borderRadius: 10,
    height: 30,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  letter: {
    fontSize: 50,
    fontWeight: "bold",
    color: "orange",
  },
});

export default DishDashScreen;
