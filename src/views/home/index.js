import React, {useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import _ from 'lodash';

import {Header, Button, LoadingView} from '../../components';
import Routes from '../../navigation/Routes';
import NavigationService from '../../navigation';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [dataPost, setDataPost] = useState([]);
  const post = useSelector(state => state.globalstate.post);
  const scrollRef = useRef();

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  useEffect(() => {
    callAPIListPost();
    scrollToTop();
  }, [post]);

  const callAPIListPost = () => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => {
        console.log('data: ', response.data);
        if (response.data.length === 0) {
          console.log('noti: ', 'can not get data');
        } else {
          console.log('noti: ', 'data has been obtained');
          const listData = response.data || [];
          const dataConcat = _.concat(post, listData);
          setDataPost(dataConcat);
        }
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Internal server error!',
        });
      });
  };

  const RenderItem = ({item}) => {
    return (
      <View style={styles.ctnItem}>
        <Text style={styles.titleStyle}>{item?.title}</Text>
        <Text>{item?.body}</Text>
      </View>
    );
  };

  const flatlistPost = () => {
    return (
      <View>
        <FlatList
          data={dataPost}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} />
          )}
        />
      </View>
    );
  };

  const _onPressAddNewPost = () => {
    NavigationService.navigate(Routes.ADD_POST_SCREEN);
  };

  const renderAddNewPost = () => {
    return (
      <View style={styles.floatView}>
        <Button
          viewStyle={styles.viewStyleButton}
          onPress={_onPressAddNewPost}
          text={'Add New Post'}
        />
      </View>
    );
  };

  const renderBody = () => {
    return <View style={styles.ctnBody}>{flatlistPost()}</View>;
  };
  return (
    <View style={styles.container}>
      <Header title={'Home'} />
      <ScrollView ref={scrollRef}>{renderBody()}</ScrollView>
      {renderAddNewPost()}
      {loading && <LoadingView />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ctnBody: {
    marginTop: 16,
    paddingBottom: 42,
    marginHorizontal: 16,
  },
  ctnItem: {
    borderWidth: 1.75,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 16,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '700',
  },
  viewStyleButton: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  floatView: {
    height: 90,
    backgroundColor: 'white',
    marginBottom: 30,
  },
});
