import React from 'react';
import { FlatList, View } from 'react-native';
import { z } from 'zod';
import RoutineListItem from './RoutineListItem';

interface Routine {
  id: number;
  name: string;
  type?: string;
}

const RoutineList: React.FC = () => {
  const data: Routine[] = [
    { id: 1, name: 'Routine 1', type: 'Workout' },
    { id: 2, name: 'Routine 2', type: 'Meditation' },
    { id: 3, name: 'Routine 3', type: 'Nutrition' },
    // Add more routine objects as needed
  ];

  const routineSchema = z.object({
    id: z.number(),
    name: z.string(),
    type: z.string().optional(),
  });

  const validatedData: Routine[] = routineSchema.array().parse(data);

  const renderItem = ({ item }: { item: Routine }) => (
    <RoutineListItem id={item.id} name={item.name} type={item.type} />
  );

  return (
    <View>
      <FlatList<Routine>
        data={validatedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default RoutineList;
