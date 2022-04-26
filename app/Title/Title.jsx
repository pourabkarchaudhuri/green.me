import React, { useState } from "react";
import { TextInput as TextInputRN, View, TouchableOpacity, TextInput } from "react-native";
import { Colors } from "style";
import Text from "../Text";

interface Props {
  isOptional: boolean;
  placeholder?: string;
  title: string;
  value: string;
  onChangeText: (text: string) => void;
}
const Title: React.FC<Props> = ({ isOptional, title }) => {
  const [isVisible, setIsVisible] = useState(isOptional ? false : true);
  const [titleName, setTitleName] = useState(title ? "" : "true");

  return (
    <View>
      <TextInput focusable={true} editable={false} value={titleName} />
    </View>
  );
};

export default Title;