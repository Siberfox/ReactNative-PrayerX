import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    padding: 15,
    paddingTop: 20,
  },
  title: {
    color: '#72A8BC',
    fontSize: 13,
    lineHeight: 15,
    marginBottom: 15,
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    marginRight: 5,
  },
  button: {
    backgroundColor: '#BFB393',
  },
});

export default styles;
