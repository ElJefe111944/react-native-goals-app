import { StyleSheet, TextInput, View, Button, Modal, Pressable, Text } from 'react-native';
import { useState } from 'react';

interface GoalInputProps {
    onAddGoal: (goal: string) => void;
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
}

const GoalInput: React.FC<GoalInputProps> = ({ onAddGoal, modalVisible, setModalVisible }) => {

    const [currentGoal, setCurrentGoal] = useState<string>('');


    const inputHandler = (item: string) => {
        setCurrentGoal(item);
    };


    const addGoalHandler = () => {
        // do not add empty inputs
        if (currentGoal.trim() === '') {
            return;
        }
        // addGoalHandler(goalText: string) 
        onAddGoal(currentGoal);
        setCurrentGoal('');
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={inputHandler} value={currentGoal} style={styles.textInput} placeholder='Your next goal' />
                <Button title='Add Goal' onPress={addGoalHandler} />
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 8,
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: "70%",
        padding: 8,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});



export default GoalInput;
