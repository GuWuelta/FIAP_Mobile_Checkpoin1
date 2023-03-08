import * as React from 'react';
import { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import WhiteCard from './components/whiteCard';
import Comment from './components/comment'
import User from './components/user'
import Legend from './components/legend'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const whiteHeart = require('./assets/heart.svg');
  const redHeart = require('./assets/redHeart.png');

  const HeartButton = () => {
  const [heart, setHeart] = useState(whiteHeart);

  const handlePress = () => {
    const nextHeart = heart === whiteHeart ? redHeart : whiteHeart;
    setHeart(nextHeart);
  }

  return (
      <TouchableOpacity onPress={handlePress}>
        <Image style={styles.heart} source={heart} />
      </TouchableOpacity>
    );
}

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => {alert('Foto de perfil de uzuumaki')}}>
        <Image style={styles.profPic} source={require('./assets/narutoprofile.jpg')} />
      </TouchableOpacity>
    <Legend userName="uzuumaki" userLegend="Um dia eu vou ser hokage! 😎🍃" />
    <Text style={styles.moreComments}>Ver todos os 23 comentários</Text>
    <Comment userName="hyuugahinatinha" userComment="Que lindo... 😳" />
    <Comment userName="uchiha.sasuke" userComment="Você nunca vai ser" />
    <Comment userName="kaka_shi" userComment="Por acaso você tirou essa foto no meio do treinamento?" />
    <User userName="uzuumaki" locale="Konoha" />
    <Image style={styles.picture} source={require('./assets/naruto.png')} />
      <TouchableOpacity onPress={() => {alert('Mais opções...')}}>
        <Image style={styles.moreOptions} source={require('./assets/ellipsis-horizontal.svg')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress={handlePress}}>
        <HeartButton />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {alert('Comentários')}}>
        <Image style={styles.comment} source={require('./assets/message.svg')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {alert('Direct')}}>
        <Image style={styles.direct} source={require('./assets/send.svg')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {alert('Salvar publicação')}}>
        <Image style={styles.save} source={require('./assets/bookmark.svg')} />
      </TouchableOpacity>
      <Text style={styles.likes}>Curtido por <strong>ji_raya</strong> e <strong>outras 92 pessoas</strong></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 18 ,
  },
  heart: {
    height: 25,
    width: 25,
    position: 'absolute',
    top: 10
  },
  comment: {
    height: 25,
    width: 25,
    position: 'absolute',
    top: 10,
    left: 40
  },
  direct: {
    height: 25,
    width: 25,
    position: 'absolute',
    top: 10,
    left: 80
  },
  save: {
    height: 25,
    width: 25,
    position: 'absolute',
    top: 10,
    left: 265
  },
  picture: {
    width: 300,
    height: 300,
  },
  moreOptions: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: -330,
    left: 275
  },
  likes: {
    position: 'absolute',
    marginTop: 560,
  },
  moreComments: {
    position: 'absolute',
    bottom: -90
  },
  profPic: {
    position: 'aboslute',
    width: 30,
    height: 30,
    top: 125,
    borderRadius: 15
  }
});