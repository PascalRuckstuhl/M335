import {
  PermissionStatus,
  launchCameraAsync,
  useCameraPermissions,
} from 'expo-image-picker';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    await requestPermission();
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert('Missing permissions!', 'Please grant access to camera.');
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.assets[0].uri);
    console.log(image.assets[0].uri);
  }

  let imagePreview = <Text>No image taken yet.</Text>;

  imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button title='Take Image' onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
