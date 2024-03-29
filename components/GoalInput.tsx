import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native';
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
                <Image style={styles.image} source={require('./../assets/images/goal.png')} />
                <TextInput onChangeText={inputHandler} value={currentGoal} style={styles.textInput} placeholder='Your next goal' />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={() => setModalVisible(!modalVisible)} color='#870101' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#000000' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        gap: 8,
        alignItems: "center",
        padding: 16,
        backgroundColor: "#98aaef",
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#dbdbdb',
        backgroundColor: '#dbdbdb',
        borderRadius: 6,
        width: "100%",
        padding: 16,
        color: '#000',
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
     textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
});



export default GoalInput;
