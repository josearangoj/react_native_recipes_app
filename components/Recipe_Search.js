import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { connect } from 'react-redux';
import RecipeDetail_Search from './RecipeDetail_Search';
import { getRecipeDetail } from '../redux/actions/index';

const RecipeSearch = (props) => {
    const [showModal, setShowModal] = useState(false);

    const getRecipeDetail = (id) => {
        props.getRecipeDetail(id);
        setShowModal(!showModal);
    }

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => getRecipeDetail(props.item.id)}>
                <Image style={styles.image} source={{ uri: props.item.image }} />
                <Text style={styles.title}>{props.item.title}</Text>
            </TouchableOpacity>
            <RecipeDetail_Search steps={props.recipeDetail.analyzedInstructions?.[0].steps} ingredients={props.recipeDetail.extendedIngredients} showModal={showModal} setShowModal={setShowModal} />
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        recipeDetail: state.reducers.recipeDetail,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRecipeDetail: (id) => dispatch(getRecipeDetail(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearch);

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
        padding: 35,
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
    button: {
        alignItems: 'center',
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width:120,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});