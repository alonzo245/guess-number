import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

export default Header = () => {


    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle} title={setRecoveryProps.title}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})