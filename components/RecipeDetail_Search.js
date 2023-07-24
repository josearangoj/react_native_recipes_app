import { StyleSheet, Text, View, TouchableOpacity, Modal, FlatList, SafeAreaView, Alert } from 'react-native';
import { connect } from 'react-redux';
import { addFav } from '../redux/actions';

const RecipeDetail = (props) => {

    return (
        <Modal animationType="slide" transparent={true} visible={props.showModal}
            onRequestClose={() => {
                props.setShowModal(!showModal);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <SafeAreaView>
                        <Text style={{ fontWeight: 900, fontSize: 16 }}>Ingredients:</Text>
                        <FlatList
                            data={props.ingredients}
                            listKey={(item, index) => `ingredient-${index}`}
                            keyExtractor={(item, index) => `ingredient-${index}`}
                            renderItem={({ item }) =>
                                <View>
                                    <Text style={{ fontSize: 16 }}>
                                        {"\u2022 "}
                                        {item.original}
                                    </Text>
                                </View>
                            }
                        />
                        <Text>{"\n"}</Text>
                        <Text style={{ fontWeight: 900, fontSize: 16 }}>Instructions:</Text>
                        <FlatList
                            data={props.steps}
                            listKey={(item, index) => `instruction-${index}`}
                            keyExtractor={(item, index) => `instruction-${index}`}
                            renderItem={({ item, index }) =>
                                <View>
                                    <Text style={{ fontWeight: 900, fontSize: 16 }}>Step {index + 1}:</Text>
                                    <Text style={{ fontSize: 16 }}>{item.step}</Text>
                                    <Text>{"\n"}</Text>
                                </View>}
                        />
                    </SafeAreaView>
                    <TouchableOpacity style={styles.button} onPress={() => props.setShowModal(!props.showModal)}>
                        <Text style={styles.textStyle}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

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

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);


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
    button: {
        alignItems: 'center',
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        margin: 10,
        width: 150,
        
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});

