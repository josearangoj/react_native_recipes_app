import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList } from "react-native";
import Recipe from '../Recipe';

const FavouriteScreen = (props) => {

  return (
    <View style={styles.container}>
      <FlatList
        data={props.favouriteRecipe}
        renderItem={({ item }) => <Recipe item={item}/>}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
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
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FavouriteScreen);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 20
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
  },
});