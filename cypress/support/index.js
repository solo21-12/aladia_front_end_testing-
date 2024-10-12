import { initPlugin } from 'cypress-plugin-snapshots/plugin';
import 'cypress-plugin-snapshots/commands';

export default (on, config) => {
  initPlugin(on, config);
  return config;
};
