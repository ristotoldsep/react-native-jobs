import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Menu = ({ isVisible, onClose, onLogout }) => {
  const router = useRouter();

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View style={styles.container}>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => {
            onClose();
            router.push(`/profile`);
            }}>
            <Text style={styles.menuText}>My Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={onLogout}>
            <Text style={styles.menuText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
  },
  menu: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    textAlign: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  closeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItem: {
    marginBottom: 16,
  },
  menuText: {
    fontSize: 16,
    textAlign: 'left',
  },
});

export default Menu;
