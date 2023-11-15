/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
	StatusBar,
	StyleSheet,
	View,
	Alert,
	FlatList,
	ActivityIndicator,
	Text,
	RefreshControl,
	TouchableOpacity,
} from 'react-native';
import {Post} from '../components/Post';
import axios from 'axios';

export const HomeScreen = ({navigation}: any) => {
	const [products, setProducts] = useState<any>([]);
	const [isLoading, setIsLoading] = useState<any>(true);

	const getProducts = async () => {
		setIsLoading(true);
		axios
			.get('https://fakestoreapi.com/products?limit=10')
			.then(({data}) => {
				setProducts(data);
			})
			.catch(() => {
				Alert.alert('Ошибка', 'Не удалось получить список продуктов');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	useEffect(() => {
		getProducts();
	}, []);

	if (isLoading) {
		return (
			<View style={styles.productsDownload}>
				<ActivityIndicator size="large" />
				<Text style={styles.productsDownloadText}>Загрузка данных...</Text>
			</View>
		);
	}

	return (
		<View>
			{/* FlatList Нужен для рендера скроллируемых элементов */}
			<FlatList
				/* Пропс refreshControl нужен для обновления инфы по свайпу.
				Когда свайпаем вниз и отпускаем экран, срабатывает событие onRefresh*/
				refreshControl={
					<RefreshControl refreshing={isLoading} onRefresh={getProducts} /> //refreshing это флаг, идет ли загрузка
				}
				//Пропс data принимает массив данных
				data={products}
				/*Пропс renderItem нужен для рендера элементов(Нужно обязательно
				деструктуризировать item, чтобы работало)*/
				renderItem={({item}: any) => (
					//TouchableOpacity добавляет эффект, чтобы нажатие на элемент было видимым
					<TouchableOpacity
						onPress={() => navigation.navigate('FullPostScreen', {post: item})}>
						<Post
							title={item.title}
							imageUrl={item.image}
							price={item.price + '$'}
						/>
					</TouchableOpacity>
				)}
			/>
			<StatusBar />
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
