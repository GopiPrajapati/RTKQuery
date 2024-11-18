import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllData} from '../feature/github/githubUserSlice';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MText from '../components/Text/MText';
import colors from '../utility/colors';
import Input from '../components/Input';
import {createUser} from '../feature/userDetailsMock/userDetailsSlice';

const CRUDDemo: FC = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmitPress = () => {
    dispatch(createUser({name: name, number: number, id: id}));
  };

  //   useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{flex: 1}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: colors.white,
          }}>
          <View>
            <View style={styles.con}>
              <MText style={styles.title} kind="h2">
                CRUD
              </MText>
            </View>
            <View style={{marginHorizontal: wp(4)}}>
              {/* <Input
                value={todoText}
                hint="Enter Todo Note Here"
                onChange={text => setTodoText(text)}
                rightIcon={rightIcon()}
              /> */}
            </View>
            <View style={{marginHorizontal: wp(4)}}>
              <MText style={styles.subTitle} kind="h2">
                Enter Details
              </MText>

              <Input
                hint={'Name'}
                placeholder={'Enter Name'}
                onChange={value => setName(value)}
                value={name}
                autoCapitalize={'none'}
                isMandatory={true}
              />
              <Input
                hint={'Id'}
                placeholder={'Enter Id'}
                onChange={value => setId(value)}
                value={id}
                autoCapitalize={'none'}
                isMandatory={true}
              />
              <Input
                hint={'Number'}
                placeholder={'Enter Number'}
                onChange={value => setNumber(value)}
                value={number}
                keyboardType={'number-pad'}
                maxLength={10}
                isMandatory={true}
              />
              <TouchableOpacity
                style={styles.submitCon}
                onPress={handleSubmitPress}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
              <FlatList
                data={data?.users}
                renderItem={item => {
                  return (
                    <View style={styles.flatListCon}>
                      <View style={styles.row}>
                        <MText
                          style={{
                            fontSize: hp(1.8),
                            textDecorationLine: 'underline',
                            color: colors.black,
                          }}
                          kind="medium">
                          {item.item.title}
                        </MText>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
            {/* <TouchableOpacity onPress={() => null}>
              <MText style={styles.subTitle} kind="medium">
                FetchTodoListAPI
              </MText>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CRUDDemo;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: colors.purple, flex: 1},
  con: {
    backgroundColor: colors.purple,
    paddingBottom: hp(1),
    // marginBottom: hp(1),
  },
  title: {
    fontSize: hp(3.5),
    textDecorationLine: 'underline',
    color: colors.white,
    marginHorizontal: wp(4),
  },
  checkmark: {
    fontSize: hp(2),
  },
  checkmarkCon: {
    paddingHorizontal: hp(0.6),
    paddingVertical: hp(0.6),
    marginVertical: hp(1),
    borderRadius: hp(1),
    borderColor: colors.black,
    borderWidth: hp(0.15),
  },
  subTitle: {
    marginTop: hp(2),
    fontSize: hp(2.5),
    textDecorationLine: 'underline',
    color: colors.black,
  },
  flatListCon: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    backgroundColor: '#846fb070',
    marginVertical: hp(1),
    borderRadius: hp(1),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitCon: {
    backgroundColor: colors.purple,
    marginVertical: hp(2),
    alignItems: 'center',
    paddingVertical: hp(1),
    borderRadius: hp(1),
  },
  submitText: {
    fontWeight: '500',
    fontSize: hp(2.5),
    textDecorationLine: 'underline',
    color: colors.white,
  },
});