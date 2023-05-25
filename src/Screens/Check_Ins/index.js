import { View, FlatList } from 'react-native';
import React from 'react';
import { CardView } from '../../Components/Custom_Card';
import environment, { CheckInQuery } from '../../API/GraphQL/RelayEnvironment';
import { usePreloadedQuery, loadQuery } from "react-relay";

const CheckInQueryReference = loadQuery(environment, CheckInQuery);


export default function Check_Ins() {

  const data = usePreloadedQuery(CheckInQuery, CheckInQueryReference);

  const check_in = data?.check_in_connection.edges || [];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={check_in}
        renderItem={({ item }) => <CardView item={item.node} />}
        keyExtractor={item => item.node.id}
      />
    </View>
  );
}
