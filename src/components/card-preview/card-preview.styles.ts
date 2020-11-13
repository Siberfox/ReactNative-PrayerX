import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardPreview: {
    width: '90%',
    height: 66,
    flexDirection: 'row',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardStatus: {
    width: 3,
    height: 20,
    backgroundColor: '#AC5253',
  },
  cardCheckbox: {
    width: 22,
    height: 22,
  },
  cardText: {
    width: '60%',
    fontSize: 17,
    lineHeight: 20,
  },
  cardIcons: {
    width: '32%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  cardLink: {
    width: '90%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: 8,
  },
});

export default styles;
