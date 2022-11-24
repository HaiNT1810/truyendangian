Gradle' cleaning in the end (in /android folder):
```bash
yarn clean
```

$ cd ios
$ rm -rf Podfile.lock
$ pod install

Adding fonts:

npx react-native-asset


***Fix lỗi react-native-i18n trên android
vào thư mục /node_modules/react-native-i18n/android/build.gradle sửa
 
    dependencies {
        -  compile "com.facebook.react:react-native:+" // From node_modules
        +  implementation "com.facebook.react:react-native:+" // From node_modules
    }

***Fix lỗi react-native-full-screen trên android
** vào thư mục /node_modules/react-native-full-screen/android/build.gradle sửa
    - dependencies {
        compile fileTree(dir: 'libs', include: ['*.jar'])
        testCompile 'junit:junit:4.12'
        compile 'com.facebook.react:react-native:0.60.+'
    }
    thành 
    + dependencies {
        implementation fileTree(dir: 'libs', include: ['*.jar'])
        testImplementation 'junit:junit:4.12'
        implementation 'com.facebook.react:react-native:+'
    }

** truy cập node_modules\react-native-full-screen\android\src\main\java\com\rn\full\screen\FullScreenModule.java
    comment @Override ở hàm createJSModules