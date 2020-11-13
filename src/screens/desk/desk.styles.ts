import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listStyle: {
    width: '90%',
    marginTop: 15,
  },
  columnItem: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 10,
  },
  columnText: {
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'left',
  },
});

export default styles;
