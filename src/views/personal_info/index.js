import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';

import {Header, TextInputCustom, DatePicker, Button} from '../../components';
import img from '../../../assets/images/splashview';
import {primaryColor} from '../../constants/colors';
import {checkWhiteSpace} from '../../constants/CheckWhiteSpace';
import {checkEmailValid} from '../../constants/CheckEmailValid';
import {savePersonalInfo} from '../../actions/globalstate';
import Routes from '../../navigation/Routes';
import NavigationService from '../../navigation';

export default function PersonalInfo() {
  const datePickerRef = React.createRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [birthDate, setBirthDate] = useState();
  const [gender, setGender] = useState(null);
  const dispatch = useDispatch();

  const renderTextInput = () => {
    return (
      <View style={styles.ctnTextInput}>
        <TextInputCustom
          value={name}
          onChangeTxt={txt => setName(txt)}
          title={'NAME'}
          placeholderText={'Enter your name'}
        />
        <TextInputCustom
          value={email}
          onChangeTxt={txt => setEmail(txt)}
          title={'EMAIL'}
          placeholderText={'Enter your email'}
        />
        <TextInputCustom
          title={'DATE OF BIRTH'}
          value={birthDate ? moment(birthDate).format('DD/MM/YYYY') : ''}
          placeholderText={'Select your date of birth'}
          onPress={() => {
            datePickerRef?.current?.onPressDate();
          }}
        />
      </View>
    );
  };

  const renderGender = () => {
    return (
      <View>
        <Text style={styles.titleGender}>GENDER</Text>
        <View style={styles.ctnRadioBoxGender}>
          <TouchableOpacity
            onPress={() => {
              setGender(true);
            }}
            style={styles.eachGender}>
            <Icon
              name={
                gender
                  ? 'checkbox-marked-circle'
                  : 'checkbox-blank-circle-outline'
              }
              size={25}
            />
            <Text style={styles.marginL4}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setGender(false);
            }}
            style={styles.eachGender}>
            <Icon
              name={
                gender === false
                  ? 'checkbox-marked-circle'
                  : 'checkbox-blank-circle-outline'
              }
              size={25}
            />
            <Text style={styles.marginL4}>Female</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View style={styles.ctnBody}>
        <Image source={img.ic_profile_avatar} style={styles.avatar} />
        {renderTextInput()}
        {renderGender()}
        <Button text={'Submit'} onPress={_onPressSubmit} />
      </View>
    );
  };

  const _onPressSubmit = async () => {
    if (!checkWhiteSpace(name)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Name is required!',
      });
    } else if (!checkWhiteSpace(email)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Email is required!',
      });
    } else if (!checkEmailValid(email)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Email is invalid!',
      });
    } else if (gender === null) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Gender is required!',
      });
    } else {
      dispatch(
        savePersonalInfo({
          name: name,
          email: email,
          dateOfBirth: birthDate,
          gender: gender,
        }),
      );
      NavigationService.navigate(Routes.HOME_SCREEN);
    }
  };

  const _onChangeDatePicker = date => {
    setBirthDate(date);
  };

  return (
    <View style={styles.container}>
      <Header title={'Personal Info'} />
      <ScrollView>{renderBody()}</ScrollView>
      <DatePicker
        refDatePicker={datePickerRef}
        onChangeDate={_onChangeDatePicker}
        maxDate={new Date()}
        date={birthDate}
      />
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
  avatar: {
    height: 140,
    width: 140,
    alignSelf: 'center',
  },
  ctnTextInput: {
    marginTop: 16,
  },
  titleGender: {
    color: primaryColor,
    fontSize: 14,
    fontWeight: '600',
  },
  ctnRadioBoxGender: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 12,
  },
  eachGender: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginL4: {
    marginLeft: 4,
  },
});
