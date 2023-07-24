import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import RecipeDetail from './RecipeDetail';

const Recipe = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={()=>setShowModal(!showModal)}>
                <Image style={styles.image} source={{uri: props.item.image}} />
                <Text style={styles.title}>{props.item.title}</Text>
            </TouchableOpacity>
            <RecipeDetail item={props.item} ingredients={props.item.ingredients} instructions={props.item.instructions} showModal={showModal} setShowModal={setShowModal}/>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
});

export default Recipe;