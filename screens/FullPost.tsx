import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, Alert} from 'react-native';
import axios from 'axios';
import {Loading} from '../components/Loading';

export const FullPostScreen = ({route, navigation}: any) => {
	// Деструктуризируем route, чтобы вытащить передаваемые параметры, и navigation, для доп.настроек
	const [product, setProduct] = useState<any>([]);
	const [isLoading, setIsLoading] = useState<any>(true);
	const {post} = route.params;

	useEffect(() => {
		// Задаем заголовок в статусбаре страницы товара
		navigation.setOptions({
			title: post.title,
		});

		axios
			.get('https://fakestoreapi.com/products/' + post.id)
			.then(({data}) => {
				setProduct(data);
			})
			.catch(() => {
				Alert.alert('Ошибка', 'Не удалось получить информацию о товаре');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [navigation, post]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<View style={styles.postWrap}>
			<Image
				source={{
					uri: product.image,
				}}
				style={styles.image}
			/>
			<View style={styles.priceWrap}>
				<Text style={styles.priceTitle}>
					Price: <Text style={styles.price}>{post.price} $</Text>
				</Text>
			</View>
			<Text style={styles.text}>{product.description}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		lineHeight: 24,
	},
	image: {
		borderRadius: 20,
		width: '100%',
		height: 250,
		marginBottom: 25,
	},
	postWrap: {
		padding: 20,
	},
	priceWrap: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginBottom: 15,
	},
	priceTitle: {
		fontWeight: '800',
	},
	price: {
		color: 'green',
	},
});
