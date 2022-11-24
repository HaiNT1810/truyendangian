import React from 'react';
import Swiper from 'react-native-swiper'
import {
  View,
  Text,
  StyleSheet,

} from 'react-native';
import { Colors } from '@app/themes';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';
const ComicMenu = () => (
  <View style={styles.menuContent}>
    <View style={styles.menuItem}>
      <View style={styles.menuIcon}>
        <Icon
          style={styles.group}
          name="th-large"
          size={28}
          color={Colors.white}
        />
      </View>
      <Text style={styles.menuLabel}>Danh mục</Text>
    </View>
    <View style={styles.menuItem}>
      <View style={styles.menuIcon}>
        <Icon
          style={styles.group}
          name="crown"
          size={28}
          color={Colors.white}
        />
      </View>
      <Text style={styles.menuLabel}>BXH</Text>
    </View>
    <View style={styles.menuItem}>
      <View style={styles.menuIcon}>
        <Icon
          style={styles.group}
          name="tasks"
          size={28}
          color={Colors.white}
        />
      </View>
      <Text style={styles.menuLabel}>Nhiệm vụ</Text>
    </View>
    <View style={styles.menuItem}>
      <View style={styles.menuIcon}>
        <Icon
          style={styles.group}
          name="heart"
          size={28}
          color={Colors.white}
        />
      </View>
      <Text style={styles.menuLabel}>Theo dõi</Text>
    </View>
  </View>
)

export default ComicMenu;
const styles = StyleSheet.create({
  menuContent: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  menuItem: {
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 6
  },
  menuIcon: {
    backgroundColor: Colors.primary,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 8
  },
  menuLabel: {
    color: Colors.text,
  },

})