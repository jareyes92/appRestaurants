import React, { useState, useRef } from "react";
import { View } from "react-native";
import Toast from "react-native-easy-toast";
import Loading from "../../components/Loading";
import AddRestaurantForm from "../../components/Restaurants/AddRestaurantForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function AddRestaurants(props) {
  const { navigation } = props;
  const { setIsReloadRestaurant } = navigation.state.params;
  const toastRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <KeyboardAwareScrollView enableOnAndroid={true} extraScrollHeight={50}>
      <View>
        <AddRestaurantForm
          navigation={navigation}
          toastRef={toastRef}
          setIsLoading={setIsLoading}
          setIsReloadRestaurant={setIsReloadRestaurant}
        />
        <Toast ref={toastRef} position="center" opacity={0.5} />
        <Loading isVisible={isLoading} text="Creando Restaurante" />
      </View>
    </KeyboardAwareScrollView>
  );
}
