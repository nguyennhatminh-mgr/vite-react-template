import defaultConfig from './base.config';
import devConfig from './dev.config';
import prodConfig from './prod.config';

interface IConfig {
  appEnv?: string;
  serverUrl: string;
  host: string;
}

const env = import.meta.env.VITE_APP_ENV;

let envConfig = defaultConfig;

switch (env) {
  case 'dev':
    envConfig = devConfig;
    break;
  case 'prod':
    envConfig = prodConfig;
    break;
  default:
    envConfig = defaultConfig;
}

const config: IConfig = {
  appEnv: env,
  ...defaultConfig,
  ...envConfig,
};

export default config;
