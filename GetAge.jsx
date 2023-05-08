import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import ActionButton from './ActionButton';

class GetAge extends Component {
  state = {
    date: new Date(),
    age: 0,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.header]}>What is your age?</Text>
        <DatePicker
          date={this.state.date}
          onDateChange={this.handleDateChange}
          textColor="black"
          fadeToColor="#eee"
          mode="date"
          style={styles.picker}
        />
        <Text style={[styles.text, styles.age]}>Age: {this.state.age}</Text>
        <ActionButton
          text="Tell Me!"
          style={styles.button}
          onPress={this.handleButtonPress}
        />
      </View>
    );
  }

  handleDateChange = date => {
    this.setState({date});
  };

  setAge(age) {
    this.setState({age});
  }

  handleButtonPress = () => {
    let today = new Date();
    let birthDay = this.state.date;

    // milliseconds in one day
    let oneDayMillis = 1000 * 60 * 60 * 24;

    // calculate the difference between days
    let difference = Math.ceil(
      (today.getTime() - birthDay.getTime()) / oneDayMillis,
    );

    // if difference is negative or equal to zero, birthday is invalid
    if (difference <= 0) {
      this.setAge('Not yet born 🤥');
    }
    // show age in days, and then years
    else if (difference > 0 && difference <= 364) {
      this.setAge(`${difference} day${difference > 1 ? 's' : ''}.`);
    } else if (difference >= 365) {
      let years = Math.floor(difference / 365);
      this.setAge(`${years} year${years > 1 ? 's' : ''}.`);
      // let days = difference % 365;
      // if (years > 0 && days > 0) {
      //   this.setAge(
      //     `${years} year${years > 1 ? 's' : ''}, ${days} day${
      //       days > 1 ? 's' : ''
      //     }.`,
      //   );
      // } else if (years < 0 && days > 0) {
      //   this.setAge(`${days} day${days > 1 ? 's' : ''}.`);
      // } else if (years > 0 && days < 0) {
      //   this.setAge(`${years} year${years > 1 ? 's' : ''}.`);
      // }
    }
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    height: '100%',
    borderRadius: 5,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: 'black',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  picker: {
  	    elevation: 20,
  },
  age: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    color: '#fff',
    backgroundColor: 'dodgerblue',
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    borderRadius: 5,
    elevation: 5,
  },
});

export default GetAge;
