module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#DC143C',
                'secondary': '#070606'
            },
            fontFamily: {
                'sans': 'Poppins',
            },
            backgroundImage: theme => ({
                'banner-image': 'url("../images/banner.jpg")'
            }),
            animation: {
                'skills-graph-html': 'graphHTML 1.5s ease-in-out forwards',
                'skills-graph-css': 'graphCSS 1.5s ease-in-out 0.3s forwards',
                'skills-graph-javascript': 'graphJavascript 1.5s ease-in-out 0.5s forwards',
                'skills-graph-react': 'graphReact 1.5s ease-in-out 0.7s forwards'
            },
            keyframes: {
                graphHTML: {
                    '0%': {
                        width: '0%',
                    },
                    '100%': {
                        width: '90%'
                    }
                },
                graphCSS: {
                    '0%': {
                        width: '0%',
                    },
                    '100%': {
                        width: '80%'
                    }
                },
                graphJavascript: {
                    '0%': {
                        width: '0%',
                    },
                    '100%': {
                        width: '60%'
                    }
                },
                graphReact: {
                    '0%': {
                        width: '0%',
                    },
                    '100%': {
                        width: '20%'
                    }
                },
            }
        },
    },
    plugins: [],
}