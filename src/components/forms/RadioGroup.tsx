import React, {useMemo} from 'react';
import {ViewStyle} from 'react-native';
import RadioButtonsGroup, {
  RadioButtonData,
} from 'react-native-radio-buttons-group';

interface RadioGroupProps {
  value: string;
  handleChange: (radioButton: RadioButtonData) => void;
  containerStyle?: ViewStyle;
  radioButtons: RadioButtonData[];
  radio: (label: string | undefined) => string | undefined;
  size: number;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  handleChange,
  containerStyle,
  radioButtons,
  radio,
  size,
}: RadioGroupProps) => {
  const modifiedRadioButton = useMemo(() => {
    return radioButtons?.map((value, key) => ({
      size,
      ...value,
      label: radio(value?.label),
      id: key.toString(), // Converting key to string as id expects a string
    }));
  }, [radioButtons, radio, size]);

  return (
    <RadioButtonsGroup
      containerStyle={{alignItems: 'flex-start', ...(containerStyle as object)}}
      radioButtons={modifiedRadioButton}
      onPress={handleChange}
      selectedId={value}
    />
  );
};

export default RadioGroup;
