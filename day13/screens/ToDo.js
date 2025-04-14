import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ToDos = () => {
  const [todos, setToDos] = useState([]);

  const thirrjeAPI = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setToDos(data.slice(0, 20)); // Optional: limit to 20 items for performance
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    thirrjeAPI();
  }, []);

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={[styles.card, item.completed && styles.completedCard]}>
          <Text style={styles.title}>{item.title}</Text>
          <Text
            style={[
              styles.status,
              item.completed ? styles.completed : styles.pending,
            ]}
          >
            {item.completed ? '✅ Completed' : '⏳ Pending'}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  completedCard: {
    backgroundColor: '#e0f7e9',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
  },
  completed: {
    color: '#27ae60',
  },
  pending: {
    color: '#e67e22',
  },
});

export default ToDos;
