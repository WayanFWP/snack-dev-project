import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { songData } from '../../data/SongData';
import { ButtonComponent } from '../components/ButtonComponent';

const ratingImages = {
  1: require('../../assets/images/star.png'),
  2: require('../../assets/images/two-stars.png'),
  3: require('../../assets/images/three-stars.png'),
  4: require('../../assets/images/four-stars.png'),
  5: require('../../assets/images/five-stars.png'),
};

const HomeScreen = (props) => {
  const { navigation } = props;
  const [recommended, setRecommended] = useState([]);
  const [newest, setNewest] = useState([]);
  const [allNewest, setAllNewest] = useState([]);

  const compareRating = (a, b) => b.rating - a.rating;
  const compareYear = (a, b) => b.year - a.year;

  useEffect(() => {
    const sortedRecommended = [...songData].sort(compareRating);
    const sortedNewest = [...songData].sort(compareYear);

    setRecommended(sortedRecommended.slice(0, 3));
    setNewest(sortedNewest.slice(0, 3));
    setAllNewest(sortedNewest);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={recommended}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.flatListContainer}
        ListEmptyComponent={
          <View style={{ alignItems: 'center' }}>
            <Text>No items in this category.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.dataContainer}>
            <Image style={styles.songImage} source={{ uri: item.imageLink }} />

            <View style={styles.songDescriptionContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.singer}>{item.singer}</Text>
              <View style={styles.yearContainer}>
                <Text>
                  {item.year} • {item.genre}
                </Text>
              </View>
              {ratingImages[item.rating] ? (
                <Image
                  style={styles.rateStars}
                  source={ratingImages[item.rating]}
                />
              ) : null}
              <ButtonComponent
                onPress={() => navigation.navigate('DetailMovie', { item })}
              />
            </View>
          </View>
        )}
        ListHeaderComponent={
          <View>
            <View style={styles.mainCategoryContainer}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Newest</Text>
              </View>
              <View style={styles.seeAllContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MostViewed', { allMostViewed: allNewest })
                  }>
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
            </View>

            <FlatList
              horizontal
              data={newest}
              keyExtractor={(item) => String(item.id)}
              contentContainerStyle={{
                flex: newest.length === 0 ? 1 : null,
              }}
              ListEmptyComponent={
                <View style={{ alignItems: 'center', flex: 1 }}>
                  <Text>No items in this category.</Text>
                </View>
              }
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.horizontalCard}
                  onPress={() => navigation.navigate('DetailMovie', { item })}>
                  <Image
                    style={styles.songImage}
                    source={{ uri: item.imageLink }}
                  />
                  <View style={styles.horizontalTitleContainer}>
                    <Text style={styles.horizontalTitle}>{item.title}</Text>
                  </View>
                  <Text style={styles.horizontalSinger}>{item.singer}</Text>
                  <Text>{item.year}</Text>
                </TouchableOpacity>
              )}
            />

            <View style={styles.mainCategoryContainer}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Recommended</Text>
              </View>
            </View>
          </View>
        }
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
  songImage: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  dataContainer: {
    margin: 8,
    borderColor: '#96ceb4',
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  singer: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  songDescriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 8,
  },
  yearContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  mainCategoryContainer: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    flexDirection: 'row',
  },
  categoryContainer: {
    flex: 1,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rateStars: {
    width: 100,
    height: 20,
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
  horizontalCard: {
    margin: 8,
    width: 180,
    alignItems: 'center',
    borderColor: '#96ceb4',
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
  },
  horizontalTitleContainer: {
    marginTop: 8,
    marginBottom: 4,
  },
  horizontalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  horizontalSinger: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
    marginBottom: 4,
  },
});

export default HomeScreen;