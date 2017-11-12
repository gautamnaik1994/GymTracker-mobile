import React, {Component} from 'react';
import {
   ToolbarAndroid,
    StyleSheet,
} from 'react-native';

export default class Toolbar extends Component<{}> {
    render() {
        return (
            <ToolbarAndroid title="Gym Tracker" titleColor='white' style={styles.toolbar}/>
        );
    }
}

const styles = StyleSheet.create({
    toolbar:{
        backgroundColor: '#2f2f2f',
        height: 56,
        alignSelf: 'stretch',
        elevation: 5
    },
});
