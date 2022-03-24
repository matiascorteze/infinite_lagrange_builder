import { useState } from 'react'
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import styles from './styles';

function FleetCompScreen() {

  const [pickedLocation, setPickedLocation] = useState();

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
      Alert.alert(
        'Permissions denied',
        'Allow the app to access geolocation permissions in order to use it',
        [{ text: 'Accept' }],
      )
      return false;
    }
    return true;
  }

  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissions();
    if (!isLocationOk) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    })

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });

  }

  return (
    <View>
      <TouchableOpacity style={styles.switchButton} onPress={handleGetLocation}>
        <Text style={styles.switchButtonTitle}>Find Your Fleet</Text>
      </TouchableOpacity>

      {pickedLocation ?
        <View style={styles.locationContainer}>
          <Text style={styles.coordText}>Latitude: {pickedLocation.lat}</Text>
          <Text style={styles.coordText}>Longitude: {pickedLocation.lng}</Text>
        </View>
        : <Text style={styles.scanning}>Scanning...</Text>
      }
    </View>
  )
}

export default FleetCompScreen;