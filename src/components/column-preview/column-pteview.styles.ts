import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  columnItem: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#fff',
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
  deleteButton: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AC5253',
    marginBottom: 10,
  },
  deleteText: {
    color: '#fff',
    fontSize: 13,
    lineHeight: 15,
  },
  swipeableContainer: {
    width: '100%',
  },
  swipeableChildContainer: {
    width: '100%',
  },
});

export default styles;
