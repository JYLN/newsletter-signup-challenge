import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000000',
			charcoalgrey: '#36384D',
			coral: '#FF6A3A',
			darkslategrey: '#242742',
			grey: '#19182B',
			strawberry: '#FF527B',
			tomato: '#FF6155',
			white: '#FFFFFF'
		},
		extend: {
			backgroundImage: {
				button: 'linear-gradient(#242742, #242742, #FF6A3A, #FF527B)'
			},
			boxShadow: {
				button: '0 1rem 2rem 0 hsla(4, 100%, 67%, 0.5)'
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif']
			},
			screens: {
				md: '60rem'
			}
		}
	},

	plugins: [forms]
} satisfies Config;
