import React from 'react';
import { CheckBox ,Text,View} from 'react-native';
import customStyles from '../../utils/globalSyles';

const CustomCheckbox = (props) => (
  <View style={customStyles.rowCentered}>
    <CheckBox />
    <Text>{props.title}</Text>
  </View>
);

export default CustomCheckbox;
