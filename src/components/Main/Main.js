import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
// eslint-disable-next-line
import { createStackNavigator } from 'react-navigation';

export default class Main extends Component {
    // eslint-disable-next-line no-undef
    static navigationOptions = {
        title: 'Main Component'
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFC1E9' }}>
                <Text>Main component</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('authentication')}
                >
                    <Text>Authentication component</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('changeInfor')}
                >
                    <Text>ChangeInfor Component</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('orderHistory')}
                >
                    <Text>OrderHistory Component</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});
