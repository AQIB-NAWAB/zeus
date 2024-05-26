import 'react-native-gesture-handler';

/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// polyfills
import 'react-native-get-random-values';
import { TextDecoder } from 'text-encoding';
global.TextDecoder = TextDecoder;

import {AppRegistry} from 'react-native';
import './shim.js'
import App from './App.tsx';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
