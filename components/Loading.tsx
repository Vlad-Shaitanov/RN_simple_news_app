import React from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';

export const Loading = () => {
	return (
		<View style={styles.productsDownload}>
			<ActivityIndicator size="large" />
			<Text style={styles.productsDownloadText}>Загрузка данных...</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	productsDownload: {
		flex: 1, // чтобы было на всю ширину экрана
		justifyContent: 'center',
		alignItems: 'center',
	},
	productsDownloadText: {
		marginTop: 15,
	},
});
