import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { ShowMovie } from '../components/MovieComponent'

const MostViewedScreen = ({ route }) => {
  const sortedMostViewed = route.params.allMostViewed;
  return (
    <View style={styles.mainContainer}>
      <FlatList
        contentContainerStyle={styles.mainDataContainer}
        data={sortedMostViewed}
        numColumns={2}
        key={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
           <ShowMovie
            image={{ uri: item.imageLink }}
            title={item.title}
            viewers={item.viewers}
            isHome={false}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainDataContainer: {
    padding: 8,
  },
  movieContainer: {
    margin: 8,
    padding: 16,
    backgroundColor: 'skyblue',
  },
  movieImage: {
    width: 130,
    height: 200,
  },
});

export default MostViewedScreen;