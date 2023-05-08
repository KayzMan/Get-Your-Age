import React, {Component} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';

class ActionButton extends Component {
  render() {
    const {text, style, onPress} = this.props;
    return (
      <View>
        <TouchableHighlight>
          <Text onPress={onPress} style={style}>
            {text}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ActionButton;
