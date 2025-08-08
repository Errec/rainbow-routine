import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import RoutineListItem from '../molecules/RoutineListItem';
import { fetchRoutines, Routine } from '../../api';

const RoutineList: React.FC = () => {
  const { data, error, isLoading } = useQuery<Routine[]>({
    queryKey: ['routines'],
    queryFn: fetchRoutines,
  });

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error || !data) {
    return (
      <View>
        <Text>Failed to load routines.</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: Routine }) => (
    <RoutineListItem
      id={item.id}
      name={item.name}
      type={item.type}
      image={item.image}
      text={item.text}
    />
  );

  return (
    <View>
      <FlatList<Routine>
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default RoutineList;
