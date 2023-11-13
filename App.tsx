/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.testText}>React Native app was started</Text>
			<StatusBar />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	testText: {
		color: 'green',
		fontWeight: 'bold',
		fontSize: 24,
	},
	backgroundColor: {
		color: 'green',
	},
});
