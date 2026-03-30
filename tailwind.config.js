const colors = require('tailwindcss/colors');

const gray = {
    50: colors.neutral[50],
    100: colors.neutral[100],
    200: colors.neutral[200],
    300: colors.neutral[300],
    400: colors.neutral[400],
    500: colors.neutral[500],
    600: colors.neutral[600],
    700: colors.neutral[700],
    800: colors.neutral[800],
    900: colors.neutral[900],
};

module.exports = {
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['"IBM Plex Sans"', '"Roboto"', 'system-ui', 'sans-serif'],
            },
            colors: {
                black: 'rgba(19, 26, 32, 0.65)',
                // "primary" and "neutral" are deprecated, prefer the use of "blue" and "gray"
                // in new code.
                primary: colors.violet,
                orange: colors.orange,
                gray: gray,
                neutral: gray,
                cyan: colors.cyan,
                neutral: {
                    50: colors.neutral[50],
                    100: colors.neutral[100],
                    200: colors.neutral[200],
                    300: colors.neutral[300],
                    400: colors.neutral[400],
                    500: colors.neutral[500],
                    600: colors.neutral[600],
                    700: 'rgba(23, 23, 27, 0.55)',
                    800: 'rgba(33, 33, 33, 0.55)',
                    900: 'rgba(18, 18, 18, 0.55)',
                }
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};
