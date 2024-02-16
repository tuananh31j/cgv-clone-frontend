/** @type {import('tailwindcss').Config} */
export default {
    prefix: '',
    // mode: 'jit',
    // purge: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'movie-selection': "url('./src/assets/img/movieSelection.gif')",
            },
            gridTemplateColumns: {
                13: 'repeat(13, minmax(0, 1fr))',
                auto: 'repeat(auto-fit, minmax(100px, auto))',
            },
        },
    },
    plugins: [],
};
