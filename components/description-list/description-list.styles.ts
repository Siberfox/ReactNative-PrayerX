import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  block: {
    width: '50%',
    height: 108,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  date: {
    color: '#BFB393',
    fontSize: 22,
    lineHeight: 26,
  },
  title: {
    color: '#BFB393',
    fontSize: 32,
    lineHeight: 32,
  },
  text: {
    fontSize: 13,
    lineHeight: 15,
    color: '#514D47',
  },
  subtitle: {
    color: '#72A8BC',
    fontSize: 13,
    lineHeight: 15,
  },
});

export default styles;
