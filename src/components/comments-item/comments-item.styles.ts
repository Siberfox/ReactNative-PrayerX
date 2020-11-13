import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 74,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingLeft: 15,
  },
  avatar: {
    marginRight: 10,
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleName: {
    color: '#514D47',
    fontSize: 17,
    lineHeight: 20,
    marginRight: 6,
  },
  titleDate: {
    color: '#9C9C9C',
    fontSize: 13,
    lineHeight: 16,
  },
  text: {
    color: '#514D47',
    fontSize: 17,
    lineHeight: 20,
  },
});

export default styles;
