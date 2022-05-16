/**
 * @format
 */
 import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

// ios cihazlarda push geldiğinde arkaplanda otomatik uygulamayı çalıştırıyor
// bunu useEffect sorgularımız olduğu için ios cihazlarda iptal edeceğiz.
// aşağıdaki kod bu işe yarıyor
function HeadlessCheck({isHeadless}) {
    if (isHeadless) {
      // App has been launched in the background by iOS, ignore
      return null;
    }
    return <App />;
  }

  AppRegistry.registerComponent(appName, () => HeadlessCheck);
