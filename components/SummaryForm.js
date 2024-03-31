import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Color } from '../constants/Color';
import Input from './Input';
import Button from './UI/Button';
import ImagePicker from './ImagePicker'

export default function SummaryForm({ submitButtonLabel, onCancel, onSubmit }) {
  const [inputValues, setInputValues] = useState({
    book: '',
    from: '',
    to: '',
    summary: '',
    imageUri: '',
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }


  function submitHandler() {
    const summaryData = {
      book: inputValues.book,
      from: inputValues.from,
      to: inputValues.to,
      summary: inputValues.summary,
      imageUri: inputValues.imageUri,
    };

    const bookIsValid = summaryData.book.trim().length > 0;
    const fromIsValid = summaryData.from.trim().length > 0;
    const toIsValid = summaryData.to.trim().length > 0;
    const summaryIsValid = summaryData.summary.trim().length > 0;
    

    if (!bookIsValid || !fromIsValid || !toIsValid || !summaryIsValid) {
      Alert.alert('Invalid input', 'Please check your input values');
      return;
    }

    onSubmit(summaryData);
  }

  return (
    <View>
      <Input
        label='book'
        textInputConfig={{
          placeholder: 'Titel of the book',
          onChangeText: inputChangedHandler.bind(this, 'book'),
          value: inputValues.book,
        }}
      />
      <Input
        label='from'
        textInputConfig={{
          placeholder: 'from page...',
          onChangeText: inputChangedHandler.bind(this, 'from'),
          value: inputValues.from,
        }}
      />
      <Input
        label='to'
        textInputConfig={{
          placeholder: 'to page...',
          onChangeText: inputChangedHandler.bind(this, 'to'),
          value: inputValues.to,
        }}
      />
      <Input
        label='summary'
        textInputConfig={{
          placeholder: 'summary',
          onChangeText: inputChangedHandler.bind(this, 'summary'),
          value: inputValues.summary,
        }}
      />
      <ImagePicker>Add photo</ImagePicker>
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 2,
    borderTopColor: Color.light_shadow,
  },
});
