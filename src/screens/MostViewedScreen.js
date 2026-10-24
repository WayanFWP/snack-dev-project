import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { ShowMovie } from '../components/MovieComponent';

const MostViewedScreen = (props) => {
  const { navigation, route } = props;
  const sortedMostViewed = route.params.allMostViewed;

  useEffect(() => {
    console.log(sortedMostViewed.length);
  }, [sortedMostViewed]);

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.mainDataContainer}
        data={sortedMostViewed}
        numColumns={2}
        key={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ShowMovie
              image={{ uri: item.imageLink }} // Nomor 1
              title={item.title} // Nomor 2
              viewers={item.viewers}
              onPress={() => navigation.navigate('DetailMovie', { item })}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainDataContainer: {
    padding: 8,
  },
  // movieContainer: {
  //   margin: 8,
  //   padding: 16,
  //   backgroundColor: 'skyblue',
  // },
  // movieImage: {
  //   width: 130,
  //   height: 200,
  // },
});

export default MostViewedScreen;
