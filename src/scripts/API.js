import { store } from './Store';

const formatQueryString = (params) => {
	if (Object.keys(params).length === 0) {
		return '';
	}

	const searchParams = new URLSearchParams();
	Object.entries(params).forEach(([key, value]) => {
		searchParams.append(key, value);
	});

	return `?${searchParams.toString()}`;
};

export const API__URL = 'http://localhost:3000';

export const fetchProducts = async (params = {}) => {
	try {
		const response = await fetch(
			`${API__URL}/api/products${formatQueryString(params)}`
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const products = await response.json();

		store.setProducts(products);
	} catch (error) {
		console.error(`Ошибка при получении данных: ${error}`);
		return [];
	}
};
