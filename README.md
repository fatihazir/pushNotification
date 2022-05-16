# pushNotification

#Packeges to be installed (follow the order)

https://rnfirebase.io/

  npm install --save @react-native-firebase/app
  The @react-native-firebase/app module must be installed before using any other Firebase service.
  
  Create credentials
  On the Firebase console, add a new Android application and enter your projects details. 
  The "Android package name" must match your local projects package name which can be found
  inside of the manifest tag within the /android/app/src/main/AndroidManifest.xml file within your project.
  
  The debug signing certificate is optional to use Firebase with your app, but is required for Dynamic Links, 
  Invites and Phone Authentication. To generate a certificate run cd android && ./gradlew signingReport. 
  This generates two variant keys. You have to copy both 'SHA1' and 'SHA-256' keys that belong to the
  'debugAndroidTest' variant key option. Then, you can add those keys to the 'SHA certificate fingerprints' 
  on your app in Firebase console.
  
  The result should seem like these:
  
  Variant: debugAndroidTest
  Config: debug
  Store: C:\Users\HFati\.android\debug.keystore
  Alias: AndroidDebugKey
  MD5: F2:95:B4:65:69:BF:1D:F1:6D:9C:48:94:3A:B7:E7:CB
  SHA1: EE:69:ED:D7:C0:C9:AA:87:21:07:E4:6D:A3:32:07:C6:DE:BF:14:C9
  SHA-256: EB:5F:2C:10:67:A6:B0:C5:89:8F:0E:AD:E8:AD:49:91:3A:D8:77:14:CF:5A:0A:8F:DE:E4:FA:59:0D:2F:7D:58
  Valid until: 24 Nisan 2051 Pazartesi
  ----------
  Variant: debugUnitTest
  Config: debug
  Store: C:\Users\HFati\.android\debug.keystore
  Alias: AndroidDebugKey
  MD5: F2:95:B4:65:69:BF:1D:F1:6D:9C:48:94:3A:B7:E7:CB
  SHA1: EE:69:ED:D7:C0:C9:AA:87:21:07:E4:6D:A3:32:07:C6:DE:BF:14:C9
  SHA-256: EB:5F:2C:10:67:A6:B0:C5:89:8F:0E:AD:E8:AD:49:91:3A:D8:77:14:CF:5A:0A:8F:DE:E4:FA:59:0D:2F:7D:58
  Valid until: 24 Nisan 2051 Pazartesi
  ----------
  Variant: releaseUnitTest
  Config: debug
  Store: C:\Users\HFati\.android\debug.keystore
  Alias: AndroidDebugKey
  MD5: F2:95:B4:65:69:BF:1D:F1:6D:9C:48:94:3A:B7:E7:CB
  SHA1: EE:69:ED:D7:C0:C9:AA:87:21:07:E4:6D:A3:32:07:C6:DE:BF:14:C9
  SHA-256: EB:5F:2C:10:67:A6:B0:C5:89:8F:0E:AD:E8:AD:49:91:3A:D8:77:14:CF:5A:0A:8F:DE:E4:FA:59:0D:2F:7D:58
  Valid until: 24 Nisan 2051 Pazartesi
  ----------
  
  Download the google-services.json file and place it inside of your
  project at the following location: /android/app/google-services.json.
  
  Then add necessary code lines from both npm page and document page(https://rnfirebase.io/)

