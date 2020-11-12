import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputSection: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    height: 50,
    marginTop: 16,
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
  cardPreview: {
    width: '90%',
    height: 66,
    flexDirection: 'row',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
