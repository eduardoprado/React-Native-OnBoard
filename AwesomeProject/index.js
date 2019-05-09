/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LoginPage from './src/components/Login/LoginPage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LoginPage);
