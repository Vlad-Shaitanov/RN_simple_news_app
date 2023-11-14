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
} from 'react-native';
import {Post} from './components/Post';
import axios from 'axios';

export default function App() {
	const [products, setProducts] = useState<any>([]);
	const [isLoading, setIsLoading] = useState<any>(true);

	const getProducts = async () => {
		setIsLoading(true);
		axios
			.get('https://fakestoreapi.com/products?limit=10')
			.then(({data}) => {
				setProducts(data);
				console.log('data', data);
			})
			.catch(error => {
				console.log('error', error);
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
				data={products} //Пропс data принимает массив данных
				renderItem={({item}: any) => (
					//Пропс renderItem нужен для рендера элементов(Нужно обязательно деструктуризировать item, чтобы работало)
					<Post
						title={item.title}
						imageUrl={item.image}
						price={item.price + '$'}
					/>
				)}
			/>
			<StatusBar />
		</View>
	);
}

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
