import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';

import {Header, Button, TextInputCustom} from '../../components';
import {savePost} from '../../actions/globalstate';
import Routes from '../../navigation/Routes';
import NavigationService from '../../navigation';

export default function AddPost() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const dispatch = useDispatch();

  const renderForm = () => {
    return (
      <View>
        <TextInputCustom
          title={'TITLE'}
          value={title}
          onChangeTxt={txt => setTitle(txt)}
          placeholderText={'Enter the title'}
        />
        <TextInputCustom
          title={'DESCRIPTION'}
          value={description}
          onChangeTxt={txt => setDescription(txt)}
          placeholderText={'Enter the description'}
          multiline={true}
          viewStyle={styles.ctnDescription}
        />
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View style={styles.ctnBody}>
        {renderForm()}
        <Button
          text={'Submit'}
          viewStyle={styles.ctnButton}
          onPress={_onPressSubmit}
        />
      </View>
    );
  };

  const _onPressSubmit = () => {
    dispatch(
      savePost({
        title: title,
        body: description,
      }),
    );
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Add post successfully!',
    });
    NavigationService.goBack();
  };

  return (
    <View style={styles.container}>
      <Header title={'Add Post'} />
      <ScrollView>{renderBody()}</ScrollView>
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
  ctnDescription: {
    height: 200,
  },
  ctnButton: {
    alignItems: 'flex-end',
  },
});
