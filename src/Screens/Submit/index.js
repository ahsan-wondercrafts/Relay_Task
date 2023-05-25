import { View, TouchableOpacity, ActivityIndicator, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import Custom_Button from '../../Components/Custom_Button';
import { useMutation } from "react-relay";
import { Add_check_in } from '../../API/GraphQL/RelayEnvironment';


export default function Submit() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [image_url, setImageUrl] = useState('');


  const [commit, isInFlight] = useMutation(Add_check_in);

  const handleAddCheckIn = async () => {
    try {
      const variables = {
        input: {
          name: name,
          comment: comment,
          image_url: image_url,
        },
      };

      const response = await commit({
        variables: variables.input,
        onCompleted: (response, errors) => {
          console.log('Response:', response);
          console.log('errors:', errors);
         },
        onError: (error) => {
          console.error('Mutation error:', error);
        },
      });
      console.log('response====', response );
      setName('');
      setComment('');
      setImageUrl('');
    } catch (error) {
      console.error('This is the catch block', error);
    }
  };

  return (
    <View style={styles.MainViewStyle}>
      <TextInput
        style={styles.textinput}
        inputMode='text'
        placeholder='Name'
        placeholderTextColor="#A7A7A7"
        onChangeText={setName}
        autoCorrect={false}
        value={name}
      />

      <TextInput
        style={styles.textinput}
        inputMode='text'
        placeholder='Comment'
        value={comment}
        onChangeText={setComment}
        placeholderTextColor="#A7A7A7"
        autoCorrect={false}
      />
      <TextInput
        style={styles.textinput}
        inputMode='text'
        placeholder='ImageUrl'
        value={image_url}
        onChangeText={setImageUrl}
        placeholderTextColor="#A7A7A7"
        autoCorrect={false}
      />

      <TouchableOpacity style={{ width: '100%' }} onPress={handleAddCheckIn}>
        <Custom_Button
          Title={isInFlight ? <ActivityIndicator size='small' color='#ffffff' /> : 'ADD'}
        />
      </TouchableOpacity>
    </View>
  );
}
