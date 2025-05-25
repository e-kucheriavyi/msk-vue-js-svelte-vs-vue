import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
	return {
		theme: 'forest',
		themeVariables: {
			primaryColor: '#3caa3c',
			primaryTextColor: '#fff',
			primaryBorderColor: '#7C0000',
			lineColor: '#F8B229',
			secondaryColor: '#3caa3c',
			tertiaryColor: '#fff',
		},
	}
})
