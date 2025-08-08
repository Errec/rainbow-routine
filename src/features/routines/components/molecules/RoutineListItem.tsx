import React from 'react';
import { Image, Text, View } from 'react-native';
import { z } from 'zod';

const RoutineListItemPropsSchema = z.object({
  name: z.string(),
  type: z.string().optional(),
  image: z.string().optional(),
  id: z.number(),
  text: z.string().optional(),
});

type RoutineListItemProps = z.infer<typeof RoutineListItemPropsSchema>;

const RoutineListItem: React.FC<RoutineListItemProps> = ({
  name,
  type,
  image,
  id,
  text,
}) => {
  return (
    <View>
      {image && <Image source={{ uri: image }} />}
      <Text>{name}</Text>
      {type && <Text>{type}</Text>}
      {text && <Text>{text}</Text>}
    </View>
  );
};

export default RoutineListItem;
