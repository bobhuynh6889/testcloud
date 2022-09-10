import React from 'react';
import {StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default function CustomDatePicker({
  onChangeDate,
  maxDate,
  minDate,
  date,
  refDatePicker,
  mode,
  minuteInterval,
  is24Hour,
}) {
  return (
    <View>
      <DatePicker
        ref={refDatePicker}
        style={styles.datePickerView}
        date={date}
        mode={mode || 'date'}
        format="YYYY-MM-DDTHH:mm:ss"
        minDate={minDate}
        maxDate={maxDate}
        confirmBtnText="Done"
        cancelBtnText="Cancel"
        onDateChange={onChangeDate}
        androidMode={'calendar'}
        is24Hour={is24Hour}
        minuteInterval={minuteInterval}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  datePickerView: {
    opacity: 0.0,
    height: 0,
    width: 0,
    fontSize: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginBottom: 0,
    marginRight: 0,
    alignItems: 'center',
  },
});
