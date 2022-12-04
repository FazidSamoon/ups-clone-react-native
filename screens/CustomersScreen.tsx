import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn';


const CustomersScreen = () => {
    const tailwind = useTailwind();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={tailwind("text-red-500")} >CustomersScreen</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    },
});
export default CustomersScreen