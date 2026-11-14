// Home Screen
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { movieData } from '../data/MovieData';
import { ShowMovie } from '../components/MovieComponent';
import { ButtonComponent } from '../components/ButtonComponent';

const HomeScreen = (props) => {
  // variable[Getter, Setter]
  const [recommended, setRecommended] = useState([]);
  const [Viewed, setViewed] = useState([]);
  const [allMostViewed, setAllMostViewed] = useState([]);
  const { navigation } = props;

  const compareRating = (a, b) => {
    const ratingA = a.rating;
    const ratingB = b.rating;

    if (ratingA > ratingB) {
      return -1;
    } else if (ratingA < ratingB) {
      return 1;
    } else {
      return 0;
    }
  };

  const compareViewers = (a, b) => {
    const viewersA = a.viewers;
    const viewersB = b.viewers;

    if (viewersA > viewersB) {
      return -1;
    } else if (viewersA < viewersB) {
      return 1;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const threeRecommended = [];
    const threeMostViewed = [];

    const sortedMostViewed = [...movieData].sort(compareViewers);
    const sortedRecommended = [...movieData].sort(compareRating);

    setAllMostViewed(sortedMostViewed);

    for (let i = 0; i < 3; i++) {
      if (sortedRecommended[i]) {
        threeRecommended.push(sortedRecommended[i]);
      }
      if (sortedMostViewed[i]) {
        threeMostViewed.push(sortedMostViewed[i]);
      }
    }

    setRecommended(threeRecommended);
    setViewed(threeMostViewed);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={recommended}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
        ListHeaderComponent={
          <View>
            <View style={styles.categoryMainContainer}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Most Viewed</Text>
              </View>
              <View style={styles.seeAllContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MostViewed', { allMostViewed })
                  }>
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
            </View>

            <FlatList
              horizontal
              ScrollView
              data={Viewed}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.flatListContainer}
              renderItem={({ item }) => (
                <ShowMovie
                  image={{ uri: item.imageLink }}
                  title={item.title}
                  viewers={item.viewers}
                  isHome={true}
                />
              )}
            />

            <View style={styles.categoryMainContainer}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Recommended</Text>
              </View>
            </View>
          </View>
        }
        renderItem={({ item }) => {
          return (
            <View style={styles.dataContainer}>
              <Image
                style={styles.movieImage}
                source={{ uri: item.imageLink }}
              />
              <View style={styles.movieDescriptionContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.yearContainer}>
                  <Text>{item.year}</Text>
                </View>

                {/* Rating Bintang */}
                <View style={styles.ratingContainer}>
                  {item.rating === 5 ? (
                    <Image
                      style={{ width: 100, height: 20 }}
                      source={require('../../assets/images/five-stars.png')}
                    />
                  ) : item.rating === 4 ? (
                    <Image
                      style={{ width: 100, height: 20 }}
                      source={require('../../assets/images/four-stars.png')}
                    />
                  ) : item.rating === 3 ? (
                    <Image
                      style={{ width: 100, height: 20 }}
                      source={require('../../assets/images/three-stars.png')}
                    />
                  ) : item.rating === 2 ? (
                    <Image
                      style={{ width: 100, height: 20 }}
                      source={require('../../assets/images/two-stars.png')}
                    />
                  ) : item.rating === 1 ? (
                    <Image
                      style={{ width: 100, height: 20 }}
                      source={require('../../assets/images/star.png')}
                    />
                  ) : null}
                </View>

                <ButtonComponent
                  onPress={() =>
                    navigation.navigate('DetailMovie', {
                      item,
                    })
                  }
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flatListContainer: {
    padding: 8,
  },
  movieImage: {
    height: 200,
    width: 130,
    borderRadius: 10,
  },
  dataContainer: {
    margin: 8,
    borderColor: '#96ceb4',
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieDescriptionContainer: {
    flex: 1,
    marginLeft: 8,
    justifyContent: 'space-between',
  },
  yearContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  ratingContainer: {
    marginBottom: 8,
  },
  categoryMainContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  categoryContainer: {
    flex: 1,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  seeAllText: {
    color: '#009688',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
