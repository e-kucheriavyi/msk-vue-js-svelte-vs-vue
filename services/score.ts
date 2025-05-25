import { ref, computed } from 'vue'

export const cats = [
	{ key: 'syntax',  label: 'Синтаксис' },
	{ key: 'events',  label: 'События' },
	{ key: 'props',  label: 'Пропсы' },
	{ key: 'reactivity',  label: 'Реактивность' },
	{ key: 'stores',  label: 'Сторы' },
	{ key: 'hooks',  label: 'Хуки' },
	{ key: 'context',  label: 'Provide/Context' },
	{ key: 'composable',  label: 'Composable' },
	{ key: 'styles',  label: 'Стили' },
	{ key: 'animations',  label: 'Анимации' },
	{ key: 'slots',  label: 'Слоты' },
	{ key: 'routing',  label: 'Роутинг' },
	{ key: 'build',  label: 'Сборка' },
	{ key: 'migration',  label: 'Миграция' },
	{ key: 'vdom',  label: 'Virtual DOM' },
	{ key: 'computed/derived',  label: 'computed / $derived' },
]

export const catKeys = cats.reduce((acc, value) => {
	acc.push(value.key)
	return acc
}, [])

export const results = {
	vue: {
		'syntax': { cringe: 0, base: 1 },
		'events': { cringe: 1, base: 4 },
		'props': { cringe: 2, base: 4 },
		'reactivity': { cringe: 1, base: 2 },
		'stores': { cringe: 0, base: 1 },
		'hooks': { cringe: 1, base: 3 },
		'context': { cringe: 0, base: 1 },
		'composable': { cringe: 0, base: 1 },
		'styles': { cringe: 1, base: 4 },
		'animations': { cringe: 0, base: 1 },
		'slots': { cringe: 0, base: 6 },
		'routing': { cringe: 0, base: 4 },
		'build': { cringe: 0, base: 1 },
		'migration': { cringe: 1, base: 0 },
		'vdom': { cringe: 0, base: 0 },
		'computed/derived': { cringe: 0, base: 1 },
		'total': { cringe: 0, base: 0 },
	},
	svelte: {
		'syntax': { cringe: 0, base: 1 },
		'events': { cringe: 1, base: 3 },
		'props': { cringe: 0, base: 2 },
		'reactivity': { cringe: 0, base: 2 },
		'stores': { cringe: 0, base: 1 },
		'hooks': { cringe: 1, base: 2 },
		'context': { cringe: 0, base: 1 },
		'composable': { cringe: 3, base: 1 },
		'styles': { cringe: 0, base: 4 },
		'animations': { cringe: 0, base: 1 },
		'slots': { cringe: 0, base: 6 },
		'routing': { cringe: 1, base: 0 },
		'build': { cringe: 0, base: 1 },
		'migration': { cringe: 0, base: 3 },
		'vdom': { cringe: 0, base: 1 },
		'computed/derived': { cringe: 1, base: 1 },
		'total': { cringe: 0, base: 0 },
	},
}

const countTotal = (lang: 'svelte' | 'vue') => {
	catKeys.forEach((key) => {
		results[lang].total.cringe += results[lang][key].cringe
		results[lang].total.base += results[lang][key].base
	})
}

countTotal('svelte')
countTotal('vue')

export const getIcon = (type: 'cringe' | 'base' | 'larana') => {
	return {
		cringe: '🤡',
		base: '🗿',
		larana: '🐸',
	}[type]
}
