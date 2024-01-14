import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  border-top-width: 6px;
  border-top-color: #f6f6f6;
  background: #ffffff;
`;

export const TabsContainer = styled.View`
  width: 100%;
  height: 43px;
  flex-direction: row;
`;

export const TabBox = styled.View`
  width: 50%;
  height: 100%;
  align-items: center;
`;

export const Tab = styled.TouchableOpacity`
  width: 67px;
  height: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #000;
  justify-content: center;
  align-items: center;
`;

export const TabText = styled.Text`
  color: #000;
  font-size: 15px;
  font-weight: 500;
`;
