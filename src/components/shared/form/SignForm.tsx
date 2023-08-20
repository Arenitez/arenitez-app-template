import {
  Button,
  createAreniteStyle,
  Text,
  TextInput,
  VStack,
} from 'arenite-kit';
import { useState } from 'react';

export type SignFormValue = {
  email: string;
  password: string;
};

const initialFormValue: SignFormValue = { email: '', password: '' };

type SignFormProps = {
  formType: 'sign-in' | 'sign-up';
  onSubmit: (values: SignFormValue) => void;
};

export const SignForm = ({ formType, onSubmit }: SignFormProps) => {
  const [formValue, setFormValue] = useState<SignFormValue>(initialFormValue);

  const onChangeFormValue = (key: keyof SignFormValue, value: string) => {
    setFormValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onPressSubmitButton = () => {
    onSubmit(formValue);
  };

  const submitButtonLabel = {
    'sign-in': 'Sign in',
    'sign-up': 'Sign up',
  }[formType];

  return (
    <VStack gap={16}>
      <Text style={style.label} color={'color1'}>
        Email
      </Text>
      <TextInput
        value={formValue.email}
        onChangeText={(value) => onChangeFormValue('email', value)}
        placeholder={'Type your email'}
        bg={'bg2'}
        color={'color1'}
        selectionColor={'primary'}
        placeholderTextColor={'color2'}
      />

      <Text style={style.label} color={'color1'}>
        Password
      </Text>
      <TextInput
        value={formValue.password}
        onChangeText={(value) => onChangeFormValue('password', value)}
        placeholder={'Type your password'}
        bg={'bg2'}
        color={'color1'}
        selectionColor={'primary'}
        placeholderTextColor={'color2'}
        secureTextEntry
      />

      <Button bg={'primary'} color={'white'} onPress={onPressSubmitButton}>
        {submitButtonLabel}
      </Button>
    </VStack>
  );
};

const style = createAreniteStyle({
  label: {
    fontSize: 18,
  },
});
