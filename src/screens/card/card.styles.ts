import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    height: 70,
    width: '100%',
    backgroundColor: '#BFB393',
    paddingHorizontal: 15,
    paddingBottom: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#fff',
    fontSize: 17,
    lineHeight: 27,
  },
  prayed: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
  },
  prayedStatus: {
    width: 3,
    height: 20,
    backgroundColor: '#AC5253',
  },
  prayedText: {
    fontSize: 17,
    lineHeight: 20,
    marginLeft: 10,
  },
});

export default styles;
