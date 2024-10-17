/* (c) Copyright Frontify Ltd., all rights reserved. */

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('../../lottie/postcss/scope')({ scope: '.lottie-block' }),
    ],
};
