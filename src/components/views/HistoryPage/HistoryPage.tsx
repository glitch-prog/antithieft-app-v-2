import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {styles} from './HistoryPage.styles';
import {
  IHistoryListItem,
  IHistoryPageView,
} from '../../containers/HistoryPage/HistoryPage.interface';

const HistoryListItem = ({t, item}: IHistoryListItem) => {
  return (
    <View style={styles.historyListItem}>
      <Text style={styles.historyListItemTitle}>
        {item.user} {t(`${item.action}`)} at {JSON.stringify(item.time)}
      </Text>
    </View>
  );
};

export const HistoryPageView = ({history}: IHistoryPageView) => {
  const {t} = useTranslation();
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.historyList}
        data={history}
        renderItem={({item}) => <HistoryListItem item={item} t={t} />}
      />
    </View>
  );
};
