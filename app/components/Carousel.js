import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";
import Carousel from "react-native-banner-carousel";

export default function CarouselImages(props) {
  const { arrayImages, height, width } = props;

  return (
    <Carousel
      autoplay
      autoplayTimeout={5000}
      loop
      index={0} // imagen d inicio
      pageSize={width}
      pageIndicatorStyle={styles.indicator} //puntos q salen
      activePageIndicatorStyle={styles.indicatorActive} // punto del indicador q este activo en ese momento
    >
      {arrayImages.map(imageUrl => (
        <View key={imageUrl}>
          <Image style={{ width, height }} source={{ uri: imageUrl }} />
        </View>
      ))}
    </Carousel>
  );
}

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: "#00a680"
  },
  indicatorActive: {
    backgroundColor: "#00ffc5"
  }
});
