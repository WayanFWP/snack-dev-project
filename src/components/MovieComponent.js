import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export const ShowMovie = (props) => {
  const { image, title, singer, year, isHome } = props;

  return (
    <View style={[styles.horizontalDataContainer, { flex: isHome ? null : 1 }]}>
      <Image style={styles.movieImage} source={image} />
      <View style={styles.horizontalTitleContainer}>
        <Text style={styles.horizontalTitle}>{title}</Text>
      </View>
      <View style={styles.viewersContainer}>
        <Icon
          name="eye" // Nomor 1
          type="entypo" // Nomor 2
          size={18} // Nomor 3
        />
        <View style={styles.viewersText}>
          <Text style={styles.singerText}>{singer}</Text>
          <Text>{year}</Text>{' '}
        </View>
      </View>
    </View>
  );
};

export const MovieExplanation = (props) => {
  const { name, value, isRating, rating } = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.nameContainer}>
        <Text style={styles.generalFontSize}>{name}</Text>
      </View>
      <Text style={styles.generalFontSize}>: </Text>
      <View style={styles.valueContainer}>
        {isRating ? (
          rating === 5 ? (
            <Image
              style={styles.ratingImage}
              source={require('../../assets/images/five-stars.png')} // Ganti tulisan 'path'
            />
          ) : rating === 4 ? (
            <Image
              style={styles.ratingImage}
              source={require('../../assets/images/four-stars.png')} // Ganti tulisan 'path'
            />
          ) : rating === 3 ? (
            <Image
              style={styles.ratingImage}
              source={require('../../assets/images/three-stars.png')}
            />
          ) : rating === 2 ? (
            <Image
              style={styles.ratingImage}
              source={require('../../assets/images/two-stars.png')} // Ganti tulisan 'path'
            />
          ) : (
            <Image
              style={styles.ratingImage}
              source={require('../../assets/images/star.png')} // Ganti tulisan 'path'
            />
          )
        ) : (
          <Text style={styles.textValue}>{value}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalDataContainer: {
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
    marginBottom: 8,
  },
  horizontalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  movieImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  viewersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewersText: {
    marginLeft: 8,
  },  
  mainContainer: {flexDirection: 'row',  marginVertical: 4},
  valueContainer: {flex: 1},
  ratingImage: {width: 100, height: 20, resizeMode: 'contain'},
});
