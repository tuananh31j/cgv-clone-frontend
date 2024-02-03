/** @type {import('tailwindcss').Config} */
export default {
    prefix: '',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'movie-selection': "url('./src/assets/img/movieSelection.gif')",
            },
        },
    },
    plugins: [],
};
