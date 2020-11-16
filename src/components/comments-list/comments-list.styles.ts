import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 15,
  },
  title: {
    color: '#72A8BC',
    fontSize: 13,
    lineHeight: 15,
    marginBottom: 15,
    paddingLeft: 15,
  },
  inputSection: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    paddingRight: 10,
  },
  inputIcon: {
    paddingLeft: 10,
  },
  input: {
    width: '90%',
    height: '100%',
    paddingLeft: 10,
    fontSize: 17,
    lineHeight: 20,
  },
  cardList: {
    width: '100%',
  },
  loading: {
    marginTop: 20,
  },
});

export default styles;
