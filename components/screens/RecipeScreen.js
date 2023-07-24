import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { generateRandomRecipes } from '../../redux/actions/index';
import { View, StyleSheet, FlatList } from "react-native";
import Recipe from '../Recipe';

function RecipeScreen(props) {

  useEffect(() => {
    props.generateRandomRecipes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        data={props.randomRecipes}
        renderItem={({ item }) => <Recipe item={item}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    randomRecipes: state.reducers.randomRecipes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    generateRandomRecipes: () => dispatch(generateRandomRecipes()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

