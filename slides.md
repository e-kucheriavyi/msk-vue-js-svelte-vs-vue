---
theme: seriph
background: /svelte-vs-vue.webp
title: Svelte — Vue курильщика?
info: Svelte — Vue курильщика?
class: text-center
drawings:
  persist: false
transition: fade
mdc: true
hideInToc: true
lineNumbers: true
---

<br><br><br><br><br><br><br><br><br><br><br>

<div class="block">

# Svelte — Vue курильщика?

## Женя Кучерявый | LaranaTech

</div>

---
layout: two-cols
---

<Title title="Кто я?" />

<v-clicks>

- ## Организатор московских дринкапов
- ## Контрибутор в опенсорс
- ## Мультипотенциал
- ## Изобретатель
- ## Философ
- ## Основатель LaranaTech
- ## Использую Svelte на работе

</v-clicks>

::right::

<img src="/public/photo.webp" style="position: absolute; top: 0; right: -20px; bottom: 0; width: 400px;" />

---
layout: center
class: text-center
---

<span style="font-size: 5rem;">x885</span>

---

<Title title="Что такое Svelte" />

<v-switch>

<template #1>

- ## Что-то среднее между Angular и React

</template>

<template #2>

- ## ~~Что-то среднее между Angular и React~~

</template>

<template #3>

- ## ~~Что-то среднее между Angular и React~~
- ## Что-то среднее между Vue и React

</template>

<template #4>

- ## ~~Что-то среднее между Angular и React~~
- ## Что-то среднее между Vue и React
- ## В РФ на Svelte пишет 2+ компании

</template>

</v-switch>

---
layout: center
class: text-center
---

<Title title="Что такое Svelte" />

> ## Svelte разрабатывается по приницу
> ## hype driven development

<br>

<v-click>

## (c) Денис Чернов

</v-click>


---
layout: center
---

<img src="/public/cocktail-1.webp" />

---
layout: center
---

<img src="/public/cocktail-2.webp" />

---
layout: center
class: text-center
---

<Title title="Что такое Svelte" />

> ## Svelte — Vue курильщика &nbsp;

<br>

<v-click>

## (c) Денис Чернов

</v-click>

---
layout: center
class: text-center
---

<Title title="Что такое Svelte" />

> ## Svelte — Vue курильщика?

<br>

<v-click>

## (c) Женя Кучерявый

</v-click>

---

<Title title="Как будет проводиться сравнение" />

<v-clicks>

- ## Разбираем фичи фреймворка
- ## Оцениваем: Кринж и База?

</v-clicks>

<Plus type="base" v-click />
<Plus type="cringe" v-click />

<v-click>

- ## В конце подводим итоги

</v-click>

<br><br>

<v-click>

> ## <span class="orange">!</span> Рассмотрим не все аспекты

</v-click>

---
layout: center
---

<img src="/public/gosling.jpg" style="height: 530px;" />

---
title: Синтаксис
---

<Title cat="Синтаксис" lang="vue" />

````md magic-move

```vue
<script setup lang="ts">
	import { ref } from 'vue'

	const items = ref([])
	const text = ref('')

	const addItem = () => {
		items.value.push(text)
		text.value = ''
	}
</script>

<template>
	<div v-for="(item, key) of items" :key class="item">{{ item }}</div>
	<form @submit.prevent="addItem">
		<input v-model="text" />
		<button type="submit">Submit</button>
	</form>
</template>
```

```vue
<template>
	<div v-for="(item, key) of items" :key class="item">{{ item }}</div>
	<form @submit.prevent="addItem">
		<input v-model="text" />
		<button type="submit">Submit</button>
	</form>
</template>

<style scoped>
	.item {
		color: red;
	}
</style>
```

````

<Plus type="base" v-click />

---

<Title cat="Синтаксис" lang="svelte" />

````md magic-move

```svelte
<script lang="ts">
	const items = $state([])
	const text = $state('')

	const addItem = (e) => {
		e.preventDefault()
		items.push(text)
		text = ''
	}
</script>

{#each items as item, i}
	<div class="item">{item}</div>
{/each}
<form onsubmit={addItem}>
	<input bind:value={text} />
	<button type="submit">Submit</button>
</form>
```

```svelte
{#each items as item, i}
	<div class="item">{item}</div>
{/each}
<form onsubmit={addItem}>
	<input bind:value={text} />
	<button type="submit">Submit</button>
</form>

<style>
	.item {
		color: red;
	}
</style>
```

````

<Plus type="base" v-click />

---


<Title cat="Синтаксис" lang="svelte" />

```svelte
<script>
	import { interval, startWith } from 'rxjs'

	const timer$ = interval(1000).pipe(
		startWith(0)
	)
</script>

<p>Counter: {$timer$}</p>
```

---
title: События
---

<Title cat="Cобытия" lang="vue" />

````md magic-move

```vue
<button
	v-on:click="increase"
	v-on:click.right.prevent.stop.once="decrease"
	v-on:click="(event) => increase(event)"
	v-on:click="counter++"
	v-on:click="increase($event)"
	v-on:click="console.log(1); console.log(2); console.log(3)"
>
	Click me!
</button>
```

```vue {all|2|3|4|5|6|7}
<button
	@click="increase"
	@click.right.prevent.stop.once="decrease"
	@click="(event) => increase(event)"
	@click="counter++"
	@click="increase($event)"
	@click="console.log(1); console.log(2); console.log(3)"
>
	Click me!
</button>
```

```vue
<script setup lang="ts">
	defineEmits({
		submit(payload: { email: string, password: string }) {
			// return `true` or `false` to indicate
			// validation pass / fail
		}
	})
</script>

<template>
	<button
		@click="$emit(
			'submit',
			{ email: 'e@vgenii.ru', password: 'qwerty' }
		)"
	>
		Submit
	</button>
</template>
```

````

---
layout: center
---

<Title cat="Cобытия" lang="vue" />

<CenterPlus :cringe="1" :base="4" />

---

<Title cat="Cобытия" lang="svelte" />

````md magic-move

```svelte {all|2|6-7}
<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
</script>

<button on:click={() => dispatch('decrement')}>decrement</button>
<button on:click={() => dispatch('increment')}>increment</button>
```

```svelte
<Stepper
	on:decrement|stopPropagation={() => n -= 1}
	on:increment|preventDefault={() => n += 1}
/>
```

````

<Plus type="cringe" v-click />

---

<Title cat="Cобытия" lang="svelte" />

````md magic-move

```svelte {all|2|3|4}
<button
	onclick={counter.increase}
	onclick={(event) => counter.increase(event)}
	{onclick}
>
	Click me!
</button>
```

```svelte
<script lang="ts">
	const makeHandler = () => {
		return () => {
			console.log(111)
		}
	}
</script>

<button onclick={makeHandler()}>Click me!</button>

```

````

---
layout: center
---

<Title cat="Cобытия" lang="svelte" />

<CenterPlus :cringe="1" :base="3" />

---
title: Пропсы
---

<Title cat="Пропсы" lang="vue" />

````md magic-move

```vue
<script setup>
	import { computed } from 'vue'

	const props = defineProps(['value'])

	const computedValue = computed(() => props.value * 2)
</script>
```

```vue
<script setup>
	import { computed } from 'vue'

	const props = defineProps({
		value: Number,
	})

	const computedValue = computed(() => props.value * 2)
</script>
```

```vue
<script setup>
	import { computed } from 'vue'

	const props = defineProps({
		value: {
			type: Number,
			required: true,
			validator: (val) => val % 2 === 0,
		},
	})

	const computedValue = computed(() => props.value * 2)
</script>
```

```vue
<script setup lang="ts">
	import { computed } from 'vue'

	const props = defineProps<{
		value: number
	}>()

	const computedValue = computed(() => props.value * 2)
</script>
```

```vue
<script setup lang="ts">
	interface Props {
		msg?: string
		labels?: string[]
	}

	const props = withDefaults(defineProps<Props>(), {
		msg: 'hello',
		labels: () => ['one', 'two'],
	})
</script>
```

````

---
layout: center
---

<Title cat="Пропсы" lang="vue" />

<CenterPlus :cringe="2" :base="3" />

---

<Title cat="Пропсы" lang="svelte" />

```svelte {all|2-5|7-10|14|15|16}
<script lang="ts">
	type Props = {
		value: number
		label?: string
	}

	let {
		value,
		label = 'Default label',
	}: Props = $props()
</script>

<Component
	value={value}
	{label}
	{...props}
/>
```

<Plus type="base" v-click />

---
layout: center
class: text-center
---

> ## Write less, do more

<br>

<v-switch>

<template #0>

## jQuery

</template>

<template #1>

## ~~jQuery~~

## Svelte

</template>

</v-switch>

---
hideInToc: true
layout: center
---

<Title cat="Пропсы" />

## Односторонняя реактивность

<Plus type="base" v-click />

---
title: Реактивность
---

<Title title="Двусторонняя реактивность" />

```tsx {all|9,10}
// React
type Props = {
	value: string
	onChange: (value: string) => void
}

function Input({ value, onChange }: Props) {
	return <input
		value={value}
		onchange={(e) => onChange(e.target.value)}
	/>
}

```

<Plus type="cringe" v-click />

---

<Title cat="Реактивность" lang="vue" title="v-model" />

````md magic-move

```vue
<script setup lang="ts">
	const props = defineProps(['modelValue'])
	const emit = defineEmits(['update:modelValue'])
</script>
<template>
	<input
		:value="props.modelValue"
		@input="emit('update:modelValue', $event.target.value)"
	/>
</template>
```

```vue
<template>
	<Input
		:modelValue="value"
		@update:modelValue="$event => (value = $event)"
	/>
</template>
```

```vue
<script setup lang="ts">
	const model = defineModel({ type: String })
</script>

<template>
	<input v-model="model" />
</template>
```

```vue {all|3}
<script setup lang="ts">
	const value = defineModel({ type: String })
	const error = defineModel('error', { type: String })
</script>

<template>
	<div>
		<input v-model="value" />
		<div v-if="error" class="red">
			{{ error }}
		</div>
	</div>
</template>
```

```vue
<template>
	<ValidatedInput v-model="text" v-model:error="error" />
</template>
```

````

---
layout: center
---

<Title cat="Реактивность" lang="vue" title="v-model" />

<CenterPlus :cringe="1" :base="2" />

---

<Title cat="Реактивность" lang="svelte" title="$bindable()" />

```svelte {all|3-4|8-9|13}
<script lang="ts">
	type Props = {
		value: string
		error: string
	}

	let {
		value = $bindable('default value'),
		error = $bindable(),
	}: Props = $props()
</script>

<input bind:value={value} bind:error={error} />
```

<Plus type="base" :value="2" v-click />

---
title: computed / $derived
---

<Title cat="Вычисляемые значения" lang="vue" title="computed" />

```vue
<script setup lang="ts">
	import { ref, computed } from 'vue'

	const counter1 = ref(0)
	const counter2 = ref(0)

	const allowComputing = ref(false)

	const totalCounter = computed(() => {
		if (allowComputing.value) {
			return counter1.value + counter2.value
		}
		return 0
	})
</script>
```

<Plus type="base" v-click />

---

<Title cat="Вычисляемые значения" lang="svelte" title="$derived" />

````md magic-move

```svelte {all|6}
<script lang="ts">
	let counter1 = $state(0)
	let counter2 = $state(0)
	let allowComputing = $state(false)

	let totalCounter = $derived($allowComputing ? $counter1 + $counter2 : 0)
</script>
```

```svelte
<script lang="ts">
	let counter1 = $state(0)
	let counter2 = $state(0)
	let allowComputing = $state(false)

	let totalCounter = $derived.by(() => {
		if ($allowComputing) {
			return $counter1 + $counter2
		}
		return 0
	})
</script>
```

````

<Plus type="base" v-click.at="[1]" />

<Plus type="cringe" v-click.at="[3]" />

---
title: Сторы
---

<Title cat="Сторы" />

````md magic-move

```ts
import { ref } from 'vue'

export const makeStore = () => {
	const counter = ref(0)

	const increase = () => {
		counter.value += 1
	}

	const decrease = () => {
		counter.value -= 1
	}

	return {
		counter,
		increase,
		decrease,
	}
}
```

```ts
import { writable, get } from 'svelte/store'

export const makeStore = () => {
	const counter = writable(0)

	const increase = () => {
		counter.set(get(counter) + 1)
	}

	const decrease = () => {
		counter.set(get(counter) - 1)
	}

	return {
		counter,
		increase,
		decrease,
	}
}
```

````

<Plus type="base" v-click />

---
title: Хуки
---

<Title cat="Хуки" lang="vue" />

```vue {all|4-6|7-9|10-12}
<script setup lang="ts">
	import { onMounted, onUnmounted, onUpdated } from 'vue'

	onMounted(() => {
		console.log(`the component is now mounted.`)
	})
	onUnmounted(() => {
		console.log(`the component is now unmounted.`)
	})
	onUpdated(() => {
		console.log(`the component is now updated.`)
	})
</script>
```

---
layout: center
---

<Title cat="Хуки" lang="vue" />

<CenterPlus :cringe="1" :base="3" />

---

<Title cat="Хуки" lang="svelte" />

```svelte {all|4-6|7-9|10-15}
<script lang="ts">
	import { onMount, onDestroy, tick } from 'svelte'

	onMount(() => {
		console.log('the component has mounted')
	})
	onDestroy(() => {
		console.log('the component is being destroyed')
	})
	$effect.pre(() => {
		console.log('the component is about to update')
		tick().then(() => {
				console.log('the component just updated')
		})
	})
</script>
```

---
layout: center
---

<Title cat="Хуки" lang="svelte" />

<CenterPlus :cringe="1" :base="2" />

---
title: Provide / Context
---

<Title cat="Контекст" lang="vue" title="provide/inject" />

````md magic-move

```vue {all|1-6|8-12}
<script setup lang="ts">
	import { ref, provide } from 'vue'

	const count = ref(0)
	provide('key', count)
</script>

<script setup lang="ts">
	import { inject } from 'vue'

	const message = inject('message', 'default value')
</script>
```

```ts
import { createApp } from 'vue'

const app = createApp({})

app.provide(/* key */ 'message', /* value */ 'hello!')

```

````

<Plus type="base" :value="1" v-click />

---

<Title cat="Контекст" lang="svelte" title="setContext/getContext" />

```ts
import { getContext, setContext } from 'svelte'

const key = 'user'

export function setUserContext(user: User) {
	setContext(key, user)
}

export function getUserContext() {
	return getContext(key) as User
}
```

<Plus type="base" :value="1" v-click />

---
title: Composables / Actions
layout: center
---

<Title cat="Переиспользование" lang="vue" title="composables" />

<CenterPlus :base="1" />

---

<Title cat="Переиспользование" lang="svelte" title="actions" />

````md magic-move

```svelte
<script lang="ts">
	import type { Action } from 'svelte/action'

	const myaction: Action = (node) => {
		// the node has been mounted in the DOM

		$effect(() => {
			// setup goes here

			return () => {
				// teardown goes here
			}
		})
	}
</script>

<div use:myaction>...</div>
```

```ts {all}
import type { Action } from 'svelte/action'

const gestures: Action<
	HTMLDivElement,
	undefined,
	{
		onswipeleft: (e: CustomEvent) => void
		onswiperight: (e: CustomEvent) => void
	}
> = (node) => {
	$effect(() => {
		// ...
		node.dispatchEvent(new CustomEvent('swipeleft'))
		// ...
		node.dispatchEvent(new CustomEvent('swiperight'))
	})
}
```

```svelte
<script lang="ts">
	import { gestures } from './gestures'
</script>

<div
	use:gestures
	onswipeleft={next}
	onswiperight={prev}
>...</div>
```

````

---

<Title cat="Переиспользование" lang="svelte" title="actions" />

<v-clicks>

- ## Должен быть прикреплён к элементу
- ## Нельзя прикрепить к компоненту
- ## Можно объявить кастомные события (deprecated)

</v-clicks>

---

<Title cat="Переиспользование" lang="svelte" title="@attach" />

```svelte
<canvas
	width={32}
	height={32}
	{@attach (canvas) => {
		const context = canvas.getContext('2d')

		$effect(() => {
			context.fillStyle = color
			context.fillRect(0, 0, canvas.width, canvas.height)
		})
	}}
></canvas>
```

---
layout: center
---

<Title cat="Переиспользование" lang="svelte" title="actions / @attach" />

<CenterPlus :cringe="3" :base="1" />

---
title: Стили
---

<Title cat="Стили" lang="svelte" />

```svelte {all|12-16|6|7|8|9}
<script lang="ts">
	let { active }: { active: boolean } = $props()
</script>

<div
	class="active"
	class:active={active}
	class:active
	class={{ disabled: !isActive }}
></div>

<style>
	.active {
		color: red;
	}
</style>
```

<Plus type="base" :value="4" v-click />

---

<Title cat="Стили" lang="vue" />

```vue {all|1-5}
<style>
	.row {
		display: flex;
	}
</style>

<style scoped>
	.row {
		display: flex;
	}
</style>

<style module>
	.row {
		display: flex;
	}
</style>
```

<Plus type="cringe" :value="1" v-click />

---
title: Анимации
layout: center
class: text-center
---

<Title title="Анимации" />

## У обоих фреймворков классные инструменты для анимаций

<Plus type="base" v-click />

---
title: Слоты
---

<Title cat="Фрагменты шаблонов" lang="vue" title="slot" />

````md magic-move

```vue {all|7|4|9-11}
<template>
	<header>
		<div>
			<slot name="left">LaranaTech</slot>
		</div>
		<div>
			<slot />
		</div>
		<div v-if="$slots.right">
			<slot name="right" />
		</div>
	</header>
</template>
```

```vue {all|6|3-5}
<template>
	<Header>
		<template #left>
			<LaranaSvg />
		</template>
		<Menu />
	</Header>
</template>
```

````

---

<Title cat="Фрагменты шаблонов" lang="vue" title="slot" />

<v-clicks>

- ## Дефолтный слот
- ## Named slots
- ## Conditional slots
- ## Dynamic slot names
- ## Scoped slots
- ## Renderless components

</v-clicks>

<Plus type="base" :value="6" v-click />

---

<Title cat="Фрагменты шаблонов" lang="svelte" title="snippet" />

````md magic-move

```svelte {all|2-6|10|11|12-14}
<script>
	let {
		left = 'LaranaTech',
		right,
		children,
	} = $props()
</script>

<header>
	<div>{@render left()}</div>
	<div>{@render children?.()}</div>
	{if right}
		<div>{@render right()}</div>
	{/if}
</header>
```

```svelte
{#snippet left()}
	<LaranaSvg />
{/snippet}

<Header {left}>
	<Menu />
</Header>
```

```svelte
<Header>
	{#snippet left()}
		<LaranaSvg />
	{/snippet}

	<Menu />
</Header>
```

```svelte
<Table data={fruits}>
	{#snippet header()}
		<th>fruit</th>
		<th>qty</th>
		<th>price</th>
		<th>total</th>
	{/snippet}

	{#snippet row(d)}
		<td>{d.name}</td>
		<td>{d.qty}</td>
		<td>{d.price}</td>
		<td>{d.qty * d.price}</td>
	{/snippet}
</Table>
```

```svelte {all|1,9,11|15-17}
<script lang="ts" generics="T">
	import type { Snippet } from 'svelte'

	let {
		data,
		children,
		row
	}: {
		data: T[]
		children: Snippet
		row: Snippet<[T]>
	} = $props()
</script>

{#each data as item}
	<tr>{@render row(item)}</tr>
{/each}
```

````

<Plus type="base" :value="6" v-click />

---
title: Роутинг
layout: two-cols
---

<Title cat="Роутинг" lang="vue" />

<v-clicks>

- ## Официальный роутер
- ## Поддержка
- ## В целом удобный роутер
- ## Вдохновил на создание `@laranatech/router`

</v-clicks>

::right::

<Qr data="https://www.npmjs.com/package/@laranatech/router" label="@laranatech/router" v-click />

<Plus type="larana" :value="4" v-click />

---
layout: center
class: text-center
hideInToc: true
---

<Title cat="Роутинг" lang="svelte" />

<v-switch>

<template #1>

## Ясно, Женя забыл сделать слайд

</template>

<template #2>

## ~~Ясно, Женя забыл сделать слайд~~

</template>

<template #3>

## В Svelte нет официального ПОДДЕРЖИВАЕМОГО роутера

</template>

<template #4>

## В Svelte нет официального ПОДДЕРЖИВАЕМОГО роутера

<Plus type="cringe" />

</template>

</v-switch>


---
title: Virtual DOM
layout: center
---

<Title title="Virtual DOM" />

<img src="/public/vdom.jpg" />

---
layout: center
---

<Qr data="https://www.youtube.com/watch?v=x7cQ3mrcKaY" label="Pete Hunt: React: Rethinking best practices -- JSConf EU" />

---

<Title cat="Virtual DOM" lang="svelte" />

<v-click>

## Ясно, в Svelte забыли добавить vDOM

</v-click>

<v-click>

<Plus type="base" />

</v-click>

---
layout: center
---

<Title cat="Virtual DOM" lang="vue" />

<img src="/public/vapor.png" />

---
title: Сборка
---

<Title cat="Сборка" lang="vue" />

<v-clicks>

- ## <span class="yellow">Код фреймворка остаётся в итоговом бандле</span>
- ## <span class="green">Создатели Vue подарили нам Vite</span>

</v-clicks>

<v-click>

<Plus type="base" />

</v-click>

<v-click>

- ## <span class="yellow">Создатели Vue скоро подарят нам rolldown</span>

</v-click>

---

<Title cat="Сборка" lang="svelte" />

<v-click>

- ## <span class="yellow"> Требуется дополнительный этап сборки — «компиляция» </span>

</v-click>

<v-click>

- ## <span class="green">После сборки от фреймворка не остаётся и следа</span>

</v-click>

<v-click>

<Plus type="base" />

</v-click>

---
layout: center
---

<Title cat="Сборка" lang="svelte" />

<Qr data="https://github.com/MrWaip/svelte-rs-2" />

---
title: Миграция
---

<Title cat="Миграция" lang="svelte" />

<v-clicks>

- ## Есть гайд по миграции
- ## Есть скрипт для миграции
- ## Есть legacy-режим

</v-clicks>

<Plus type="base" :value="3" v-click />

---
layout: center
---

<Title cat="Миграция" lang="vue" title="Боль" />

<img src="/public/naruto.webp" style="height: 480px;" />

---
layout: center
---

<Title cat="Миграция" lang="vue" title="Боль" />

<img src="/public/hero.jpg" style="height: 480px;" />

---
layout: center
---

<Title cat="Миграция" lang="vue" title="Боль" />

<Qr data="https://www.youtube.com/watch?v=cp2rRlEK2ic" label="Пусть наебнётся" />

<Plus type="cringe" v-click />

---
layout: center
title: Итоги
---

<Title title="Итоги" />

<Totals />

---

<Title title="Итоги" />

<v-clicks>

- ## Рассмотрели не все критерии
- ## Спикер пердвзят

</v-clicks>

<br>

<v-clicks>

- ## Svelte становится беднее
- ## Не всегда бедность лишает его глубины
- ## Vue классный
- ## React хуже всего

</v-clicks>


---

<CounterTable />

---
layout: center
class: text-center
---

<Title title="Спасибо за внимание" />

<Qr data="https://t.me/+DwMpehY_jcM1YzIy" label="@frontend_director" />

<br>

## Женя Кучерявый
