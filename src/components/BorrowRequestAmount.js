import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default  BorrowRequestAmount = ({ onGoToTimeSelection }) => {
    return(
        <View style={styles.container}>
            <Text>Welcome to Borrow Request Amount Selection Component</Text>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={onGoToTimeSelection} style={styles.button}>
                    <Text style={styles.buttonText}>Go to time</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent:'center',
        alignItems:'center',
        alignContent: 'center',
        padding: 20
    },
    buttonWrapper: { 
        justifyContent:'center',
        alignItems:'center',
        alignContent: 'center'
    },
    button: {
        flexDirection: 'row',
        height: 40,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        alignItems: 'center',
        padding: 20,
        elevation: 4,
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
    }
})