import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { searchRecipes } from '../../redux/actions/index';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import RecipeSearch from "../Recipe_Search";

function AdvancedSearchScreen(props) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [cuisine, setCuisine] = useState(null);
  const [cuisineItems, setCuisineItems] = useState([{ label: "Select the cuisine", value: '' },
  { label: 'African', value: 'african' }, { label: 'American', value: 'american' }, { label: 'British', value: 'british' },
  { label: 'Cajun', value: 'cajun' }, { label: 'Caribbean', value: 'caribbean' }, { label: 'Chinese', value: 'chinese' },
  { label: 'Eastern European', value: 'eastern european' }, { label: 'European', value: 'european' }, { label: 'French', value: 'french' },
  { label: 'German', value: 'german' }, { label: 'Greek', value: 'greek' }, { label: 'Indian', value: 'indian' },
  { label: 'Irish', value: 'irish' }, { label: 'Italian', value: 'italian' }, { label: 'Japanese', value: 'japanese' },
  { label: 'Jewish', value: 'jewish' }, { label: 'Korean', value: 'korean' }, { label: 'Latin American', value: 'latin american' },
  { label: 'Mediterranean', value: 'mediterranean' }, { label: 'Mexican', value: 'mexican' }, { label: 'Middle Eastern', value: 'middle eastern' },
  { label: 'Nordic', value: 'nordic' }, { label: 'Southern', value: 'southern' }, { label: 'Spanish', value: 'spanish' },
  { label: 'Thai', value: 'thai' }, { label: 'Vietnamese', value: 'vietnamese' }]);
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
  }, []);


  return (
    <SafeAreaView style={styles.container}>
        <TextInput style={styles.input} onChangeText={setQuery} value={query} placeholder="Searching keyword" />
        <DropDownPicker containerStyle={styles.dropdown} open={open} value={cuisine} items={cuisineItems} setOpen={setOpen} setValue={setCuisine} setItems={setCuisineItems}
          searchable={true} placeholder="Select the cuisine" searchPlaceholder="Search..." dropDownDirection="TOP"  />
        <View style={{ flex: 2.5}}>
        <FlatList
          data={props.searchRecipesItem}
          renderItem={({ item }) => <RecipeSearch item={item} />}
          keyExtractor={item => item.id} />
          </View>
        <TouchableOpacity style={styles.button} onPress={() => props.searchRecipes(query, cuisine)}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  return {
    searchRecipesItem: state.reducers.searchRecipes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchRecipes: (query, cuisine) => dispatch(searchRecipes(query, cuisine)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSearchScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  dropdown: {
    flex: 1,
    width: "auto",
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    margin: 12,
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});