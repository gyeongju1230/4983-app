import {Text, TouchableOpacity, View} from 'react-native';
import * as styles from '@components/home/book-list-box/book-list-box.styles';
import {BookStatus} from '@components/home/book-status/book-status';
import useFormatTimeAgo from '@/hooks/use-format-time-ago';
import {useFormatPrice} from '@/hooks/use-format-price';
import {useEffect} from 'react';

const BookListBox = ({bookData, index, navigation}) => {
  const dateTime = new Date(bookData.tradeAvailableDatetime);
  const usedBookId = bookData.usedBookId;

  return (
    <styles.EachBookContainer
      key={`eachBookListBox${index}`}
      onPress={() =>
        navigation.navigate('Detail', {
          usedBookId,
        })
      }>
      <styles.MainImage
        width={100}
        height={100}
        source={{
          uri: bookData.imageUrl,
        }}
      />
      <styles.BookInfoContainer>
        <styles.BookNameStatusContainer>
          <BookStatus status={bookData.bookStatus} />
          <styles.BookName>{bookData.name}</styles.BookName>
        </styles.BookNameStatusContainer>
        <styles.BookDateContainer>
          <styles.BookTradeAvailableDate
            style={{
              color: bookData.bookStatus === 'SALE' ? '#02b878' : '#8F8F8F',
            }}
            status={bookData.bookStatus}>
            {dateTime.getMonth() + 1}월 {dateTime.getDate()}일 거래가능
          </styles.BookTradeAvailableDate>
          <Text
            style={{
              color: '#8F8F8F',
              fontSize: 12,
              fontWeight: 400,
            }}>
            • {useFormatTimeAgo(bookData.createdAt)}
          </Text>
        </styles.BookDateContainer>
        <View>
          <Text
            style={{
              color: '#36332E',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 700,
            }}>
            {useFormatPrice(bookData.price)}원
          </Text>
        </View>
      </styles.BookInfoContainer>
    </styles.EachBookContainer>
  );
};

export default BookListBox;
