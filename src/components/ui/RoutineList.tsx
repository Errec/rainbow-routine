import React from 'react';
import { FlatList, View } from 'react-native';
import { z } from 'zod';
import RoutineListItem from './RoutineListItem';

const RoutineList: React.FC = () => {
  const data = [
    { id: 1, name: 'Routine 1' },
    { id: 2, name: 'Routine 2' },
    { id: 3, name: 'Routine 3' },
    // Add more routine objects as needed
  ];

  const routineSchema = z.object({
    id: z.number(),
    name: z.string(),
  });

  const validatedData = routineSchema.array().parse(data);

  const renderItem = ({ item }: { item: { id: number; name: string } }) => (
    <RoutineListItem id={item.id} name={item.name} type={''} />
  );

  return (
    <View>
      <FlatList
        data={validatedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default RoutineList;
