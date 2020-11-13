import React, {useState} from 'react';
import {View} from 'react-native';

import CustomButton from '../custom-button/custom-button';
import CardPreview from '../card-preview/card-preview';

import styles from './subscribed-list.styles';

const SubscribedList: React.FC = () => {
  const [isShowAnswered, setIsShowAnswered] = useState(false);

  return (
    <View style={styles.container}>
      <CardPreview />
      <CardPreview />
      <CardPreview />
      <CustomButton
        text={
          isShowAnswered ? 'hide Answered Prayers' : 'Show Answered Prayers'
        }
        action={() => setIsShowAnswered(!isShowAnswered)}
      />
      {isShowAnswered ? (
        <>
          <CardPreview />
          <CardPreview />
        </>
      ) : null}
    </View>
  );
};

export default SubscribedList;
