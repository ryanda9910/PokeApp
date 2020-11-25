import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../utils/actions/data';

export default function Home() {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.reducerData);

  useEffect(() => {
    dispatch(getData(0));
  }, [dispatch]);

  console.log(data.results);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Poke App</Text>
    </View>
  );
}
