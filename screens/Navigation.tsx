import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './Home';
import {FullPostScreen} from './FullPost';

const Stack = createNativeStackNavigator();

// Stack.Navigator примерно аналогичен <Routes>..</Routes> в React

export const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home" //Название экрана
					component={HomeScreen} //Компонент, который рендерим
					options={{title: 'Товары'}} //Сверху экрана будет заголовок
				/>
				<Stack.Screen
					name="FullPostScreen"
					component={FullPostScreen}
					options={{title: 'Описание товара'}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
