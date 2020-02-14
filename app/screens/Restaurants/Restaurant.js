import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  ScrollScrollView,
  Text,
  Dimensions,
  View
} from "react-native";
import { Rating } from "react-native-elements";
import Carousel from "../../components/Carousel";
import * as firebase from "firebase";

const screenWidth = Dimensions.get("window").width; // ancho de la pantalla del movill

export default function Restaurant(props) {
  const { navigation } = props;
  const { restaurant } = navigation.state.params.restaurant.item;
  const [imagesRestaurant, setImagesRestaurant] = useState([]);

  useEffect(() => {
    const arrayUrls = [];

    (async () => {
      await Promise.all(
        restaurant.images.map(async idImage => {
          await firebase
            .storage()
            .ref(`restaurant-images/${idImage}`)
            .getDownloadURL()
            .then(imageUrl => {
              arrayUrls.push(imageUrl);
            });
        })
      );
      setImagesRestaurant(arrayUrls);
    })();
  }, []);

  return (
    <ScrollView style={styles.viewBody}>
      <Carousel
        arrayImages={imagesRestaurant}
        height={250}
        width={screenWidth}
      />
      <TitleRestaurant
        name={restaurant.name}
        description={restaurant.description}
        rating={restaurant.rating}
      />
    </ScrollView>
  );
}

function TitleRestaurant(props) {
  const { name, description, rating } = props;

  return (
    <View style={styles.viewRestaurantTitle}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.nameRestaurant}> {name} </Text>
        {/* TODO: hacer q me funcione bien en el cell  */}
        <Rating
          style={styles.rating}
          imageSize={20}
          readonly
          startingValue={parseFloat(rating)}
        />
      </View>
      <Text style={styles.descriptionRestaurant}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  },
  viewRestaurantTitle: {
    margin: 15
  },
  nameRestaurant: {
    fontSize: 20,
    fontWeight: "bold"
  },
  rating: {
    position: "absolute",
    right: 0
  },
  descriptionRestaurant: {
    marginTop: 5,
    color: "grey"
  }
});
