import React from 'react';
import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';

export const Post = ({title, imageUrl, price}: any) => {
	const trimTitle = (str: string) => {
		if (str.length >= 50) {
			return str.substring(0, 50) + ' ...';
		} else {
			return str;
		}
	};
	return (
		<View>
			<View style={styles.post}>
				<Image
					style={styles.postImage}
					source={{
						uri: imageUrl,
					}}
				/>
				<View style={styles.postDetails}>
					<Text style={styles.postTitle}>{trimTitle(title)}</Text>
					<Text style={styles.postDate}>{price}</Text>
				</View>
			</View>
			<StatusBar />
		</View>
	);
};

const styles = StyleSheet.create({
	post: {
		flexDirection: 'row',
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0, 0, 0, 0.1)',
		borderStyle: 'solid',
	},
	postImage: {
		height: 70,
		width: 70,
		borderRadius: 12,
		marginRight: 12,
	},
	postTitle: {
		fontSize: 16,
		fontWeight: '700',
	},
	postDate: {
		fontSize: 12,
		color: 'rgba(0, 0, 0, 0.4)',
		marginTop: 2,
	},
	postDetails: {
		flex: 1,
		justifyContent: 'center',
	},
});
