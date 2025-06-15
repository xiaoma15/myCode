const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        configure: (webpackConfig, { env, paths }) => {
            // 修改HtmlWebpackPlugin配置，注入CDN资源
            const htmlWebpackPlugin = webpackConfig.plugins.find(
                (plugin) => plugin.constructor.name === 'HtmlWebpackPlugin'
            );

            if (htmlWebpackPlugin) {
                // 根据环境变量区分开发/生产环境
                const isProduction = env === 'production';
                console.log(isProduction)

                // 生产环境使用CDN
                if (isProduction) {
                    htmlWebpackPlugin.options.cdn = {
                        js: [
                            'https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.production.min.js',
                            'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js',
                            // 其他CDN资源...
                        ],
                        css: [
                            // 'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css',
                            // 其他CSS资源...
                        ],
                    };
                }
                // 开发环境使用本地资源
                else {
                    htmlWebpackPlugin.options.cdn = {
                        js: [],
                        css: [],
                    };
                }
            }

            // 排除CDN引入的模块，避免重复打包
            webpackConfig.externals = {
                react: 'React',
                'react-dom': 'ReactDOM',
                // 'react-router-dom': 'ReactRouterDOM',
                // 其他外部模块...
            };

            return webpackConfig;
        },
    },
};