import styled from 'styled-components/native';
import PasswordOnSvg from '@assets/images/signin/PasswordViewOn.svg';
import PasswordOffSvg from '@assets/images/signin/PasswordViewOff.svg';

export const InputContainer = styled.View`
  width: 100%;
  height: 28.5%;
  margin-bottom: 8%;
`;

export const InputBox = styled.View`
  width: 82.4%;
  height: 50%;
  align-self: center;
`;

export const InputText = styled.Text`
  padding-left: 6px;
  color: #36332e;
  font-size: 15px;
  font-weight: 700;
  line-height: 32px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width: 100%;
  height: 52px;
  padding-left: 17px;
  border-radius: 5px;
  border: 1px solid #fff;
  background: #f4f4f4;
  color: #36332e;
  font-size: 15px;
  font-weight: 400;
`;

export const PasswordIconBox = styled.TouchableOpacity`
  position: absolute;
  top: 49px;
  right: 20px;
`;

export const PasswordOn = styled(PasswordOnSvg)``;

export const PasswordOff = styled(PasswordOffSvg)``;

export const Box = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CheckContainer = styled.View`
  padding-left: 6px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-top: 1.5%;
`;

export const CheckText = styled.Text`
  color: #36332e;
  font-size: 14px;
  font-weight: 700;
`;

export const ErrorText = styled.Text`
  margin-right: 3px;
  color: #f61818;
  font-size: 12px;
  font-weight: 500;
`;
