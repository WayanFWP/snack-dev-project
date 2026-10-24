import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { userData } from '../../data/TryCodeData';

const TryCodeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{ padding: 8 }}
        data={userData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={[
                styles.containerAnItem,
                {
                  backgroundColor:
                    item.gender.toLowerCase() === 'male'
                      ? 'moccasin'
                      : 'lavender',
                },
              ]}>
              <Image
                source={{ uri: item.imageLink }}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <Text>{item.name}</Text>
              <Text>{item.gender}</Text>
              <Text>{item.age}</Text>
              {item.age >= 6 && item.age <= 12 ? (
                <Text>Child</Text>
              ) : // Lanjutkan dibawah ini ya!
              item.age >= 13 && item.age <= 17 ? (
                <Text>Teens</Text>
              ) : item.age >= 18 && item.age <= 64 ? (
                <Text>Adult</Text>
              ) : null}
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerAnItem: {
    margin: 8,
    borderWidth: 1,
    // backgroundColor: 'lavender',
  },
});

export default TryCodeScreen;
