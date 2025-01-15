module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        const rules = webpackConfig.module.rules.find(rule => rule.oneOf);
        
        rules.oneOf.unshift({
          test: /\.(glb|gltf)$/,
          type: 'asset/resource',
        });
  
        return webpackConfig;
      },
    },
  };
  