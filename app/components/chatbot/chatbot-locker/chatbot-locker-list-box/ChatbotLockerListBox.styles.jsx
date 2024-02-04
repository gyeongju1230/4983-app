import styled from 'styled-components/native';

export const Container = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  height: 510px;
`;

export const ListBox = styled.TouchableOpacity`
  width: 78px;
  height: 45px;
  margin-top: 15px;
  margin-left: 15px;
  border-radius: 5px;
  background: ${props => (props.isExists ? '#02B878' : '#ccc')};
`;

export const ListBoxNumber = styled.Text`
  position: absolute;
  width: 21px;
  height: 13px;
  margin-top: 5px;
  margin-left: 09px;
  color: #000;
  font-size: 14px;
  font-weight: 700;
`;