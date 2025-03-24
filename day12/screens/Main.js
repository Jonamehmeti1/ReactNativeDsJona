import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from 'react-native';

const Main = () => {
  const [posts, setPosts] = useState([]);

  const APICALI = async () => {
    const pergjigjja = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await pergjigjja.json();
    setPosts(data);
  };

  useEffect(() => {
    APICALI();
  }, []);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
          <Text>{item.body}</Text>
        </View>
      )}
    />
  );
};

export default Main;
