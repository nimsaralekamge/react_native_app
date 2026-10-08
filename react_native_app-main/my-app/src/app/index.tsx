import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile Content Body */}
      <View style={styles.content}>
        {/* Avatar Section */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png', // Replace with your avatar URL
              }}
              style={styles.avatarImage}
            />
            {/* Green Verified Checkmark Badge */}
            <View style={styles.badgeContainer}>
              <Ionicons name="checkmark-sharp" size={20} color="#00FF00" />
            </View>
          </View>
        </View>

        {/* Divider Line */}
        <View style={styles.divider} />

        {/* Details Section */}
        <View style={styles.detailsContainer}>
          {/* Name Row */}
          <View style={styles.infoGroup}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>Diluka</Text>
          </View>

          {/* Email Row */}
          <View style={styles.infoGroup}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.iconRow}>
              <Ionicons name="mail" size={18} color="#000" style={styles.icon} />
              <Text style={styles.value}>diluka.w@nsbm.ac.lk</Text>
            </View>
          </View>

          {/* Points Row */}
          <View style={styles.infoGroup}>
            <Text style={styles.label}>Points</Text>
            <View style={styles.iconRow}>
              <Ionicons name="star" size={18} color="#000" style={styles.icon} />
              <Text style={styles.value}>0</Text>
            </View>
          </View>
        </View>

        {/* Floating Action Button (+ Button) */}
        <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
          <Ionicons name="add" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    height: 56,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    position: 'relative',
  },
  avatarSection: {
    alignItems: 'center',
    marginVertical: 10,
  },
  avatarContainer: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // Border around avatar container
    borderWidth: 1,
    borderColor: '#FFC1C1',
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 12,
    right: 10,
    backgroundColor: 'transparent',
  },
  divider: {
    height: 1.5,
    backgroundColor: '#333333',
    marginVertical: 15,
    width: '100%',
  },
  detailsContainer: {
    marginTop: 10,
  },
  infoGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  value: {
    fontSize: 15,
    color: '#333333',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});