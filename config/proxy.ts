/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
 export default {
  dev: {
    '/api/lebm7sjqdvexf2jy': {
      target: 'http://lebm7sjqdvexf2jy.hzfin.antapigw.aliyuncs.com',
      changeOrigin: true,
      pathRewrite: { '^/api/lebm7sjqdvexf2jy': '' },
    },
    '/api/splqphgufd2onz0q': {
      target: 'http://splqphgufd2onz0q.hzfin.antapigw.aliyuncs.com',
      changeOrigin: true,
      pathRewrite: { '^/api/splqphgufd2onz0q': '' },
    },
  },
};
