import React from 'react';
import {View, FlatList, StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const morning = [
  {
    id: '01',
    title: 'Waking up early',
  },
  {
    id: '02',
    title: 'Hygiene Session',
  },
  {
    id: '03',
    title: 'Exercise',
  },
  {
    id: '04',
    title: 'Breakfast',
  },
  {
    id: '05',
    title: 'Household Cleaning',
  },
  {
    id: '06',
    title: 'Frontyard Cleaning',
  },
  {
    id: '07',
    title: 'Making Project and Assignments',
  },
  {
    id: '08',
    title: 'Taking a Nap',
  },
];
const afternoon = [
  {
    id: '09',
    title: 'Eating Lunch',
  },
  {
    id: '10',
    title: 'Preparation',
  },
  {
    id: '11',
    title: 'Go to School',
  },
  {
    id: '12',
    title: 'Commuting',
  },
  {
    id: '13',
    title: 'Reviewing',
  },
  {
    id: '14',
    title: 'Studying',
  },
  {
    id: '15',
    title: 'Snack',
  },
  {
    id: '16',
    title: 'Nap',
  },
];
const evening = [
  {
    id: '17',
    title: 'Going Home',
  },
  {
    id: '18',
    title: 'Taking a Nap',
  },
  {
    id: '19',
    title: 'Cooking for Dinner',
  },
  {
    id: '20',
    title: 'Eating Dinner',
  },
  {
    id: '21',
    title: 'Washing Dishes',
  },
  {
    id: '22',
    title: 'Going to workplace',
  },
  {
    id: '23',
    title: 'Work',
  },
  {
    id: '24',
    title: 'Going Home',
  },
  {
    id: '25',
    title: 'Sleep',
  },
];


const Item = ({title},{id}) => (
  <View style={styles.item}>
      <Text style={styles.title}>{id}{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Morning</Text>
        <FlatList
          data={morning}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />

        <Text style={styles.header}>Afternoon</Text>
        <FlatList
          data={afternoon}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />

        <Text style={styles.header}>Evening</Text>
        <FlatList
          data={evening }
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderWidth: 3,
    backgroundColor: '#f5f5dc',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  header: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'Copper',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 20,
    fontWeight: '100',
  },
});

export default App;