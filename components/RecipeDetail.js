import { StyleSheet, Text, View, TouchableOpacity, Modal, FlatList, SafeAreaView, Alert } from 'react-native';
import React, { useState } from "react";
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';

const RecipeDetail = (props) => {

  const handleAddFav = (item) => {
    props.addFav(item);
    Alert.alert("Added to Favourites List");
  };

  const handleRemoveFav = (item) => {
    props.removeFav(item);
    Alert.alert("Removed from Favourites List");
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.showModal}
      onRequestClose={() => {
        props.setShowModal(!props.showModal);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <SafeAreaView>
            <Text style={{ fontWeight: 900, fontSize: 16 }}>
              Ingredients:
            </Text>
            <FlatList
              data={props.ingredients}
              listKey={(item, index) => `ingredient-${index}`}
              keyExtractor={(item, index) => `ingredient-${index}`}
              renderItem={({ item }) => (
                <View>
                  <Text style={{ fontSize: 16 }}>
                    {"\u2022 "}
                    {item}
                  </Text>
                </View>
              )}
            />

            <Text>{"\n"}</Text>
            <Text style={{ fontWeight: 900, fontSize: 16 }}>
              Instructions:
            </Text>
            <FlatList
              data={props.instructions}
              listKey={(item, index) => `instruction-${index}`}
              keyExtractor={(item, index) => `instruction-${index}`}
              renderItem={({ item, index }) => (
                <View>
                  <Text style={{ fontWeight: 900, fontSize: 16 }}>
                    Step {index + 1}:
                  </Text>
                  <Text style={{ fontSize: 16 }}>{item.text}</Text>
                  <Text>{"\n"}</Text>
                </View>
              )}
            />
          </SafeAreaView>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.setShowModal(!props.showModal)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>

            {props.favouriteRecipe.some((recipe) => recipe.id == props.item.id) ?
              <TouchableOpacity style={styles.button} onPress={() => handleRemoveFav(props.item)}>
                <Text style={styles.textStyle}>Remove from favorites</Text>
              </TouchableOpacity>
              :
              <TouchableOpacity style={styles.button} onPress={() => handleAddFav(props.item)}>
                <Text style={styles.textStyle}>Add to favorites</Text>
              </TouchableOpacity>
            }
          </View>
        </View>
      </View>
    </Modal>
  );
};


const mapStateToProps = (state) => {
  return {
    favouriteRecipe: state.reducers.addFav,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (id) => dispatch(addFav(id)),
    removeFav: (id) => dispatch(removeFav(id)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);




// export default RecipeDetail;


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "95%",
    height: "85%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 180,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});







