module.exports = {
    /* config options here */
    compress: false,
    target: 'serverless',
    pageExtensions: ['mdx', 'jsx', 'js'],

    "presets": ["@emotion/babel-preset-css-prop"],
    "plugins": [
        ["import", {"libraryName": "antd", "style": "css"}],
        "@babel/plugin-proposal-class-properties"
    ]


}