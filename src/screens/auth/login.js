import React, { Component, useState } from 'react';
import { View, StyleSheet, TextInput, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Input, Icon, Text, Button } from '@rneui/themed';
import { connect } from 'react-redux';
import { fetchDataAll } from '../../redux/actions/app';
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/fonts'
import { spaces } from '../../theme/spaces'
import { useTranslation } from 'react-i18next';
import Alert from '../../components/alert';

import Logo from '../../assets/images/logo-white.png';
function Login({ navigation, setIsLoggedIn }) {
  const { t } = useTranslation();
  const [server, setServer] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const fakeUser = {
    username: 'kullanici',
    password: 'sifre',
  };
  const handleLogin = () => {
    setError(false)
    if (username === fakeUser.username && password === fakeUser.password) {
      setIsLoggedIn(true);
    } else {
      setError(true)
    }
  };

  const handleCloseAlert = () => {
    setError(false);
  };

  return (
    <KeyboardAvoidingView keyboardShouldPersistTaps="handled" style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Image source={Logo} style={styles.logo}></Image>
      <View style={styles.login_text}>
        <Text style={styles.lb_title}>{ t('login_title') }</Text>
        <Text p style={{ color: colors.textOnPrimaryLow, fontFamily: fonts.primary.normal }}>{ t('login_subtitle') }</Text>
      </View>
      <Alert visible={error} message={ t('error_message') } type="danger" onError={handleCloseAlert} />
      <View style={styles.login_box}>
        <Input
          placeholder={ t('server_ip_address' )}
          placeholderTextColor={colors.textOnPrimaryLow}
          value={server}
          inputContainerStyle={styles.login_inputs}
          inputStyle={{
            color: colors.textOnPrimary,
            fontFamily: fonts.primary.normal
          }}
          onChangeText={(text) => setServer(text)}
        />
        <Input
          placeholder={ t('username' )}
          placeholderTextColor={colors.textOnPrimaryLow}
          value={username}
          inputStyle={{
            color: colors.textOnPrimary,
            fontFamily: fonts.primary.normal
          }}
          inputContainerStyle={styles.login_inputs}
          onChangeText={(text) => setUsername(text)}
        />
        <Input
          placeholder={ t('password' )}
          placeholderTextColor={colors.textOnPrimaryLow}
          value={password}
          inputStyle={{
            color: colors.textOnPrimary,
            fontFamily: fonts.primary.normal
          }}
          inputContainerStyle={styles.login_inputs}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
      <Button
        title={t('login')}
        buttonStyle={{
          backgroundColor: colors.secondary,
          borderRadius: 30,
          
        }}
        containerStyle={{
          alignSelf: 'stretch',
          marginHorizontal: spaces.container,
          marginVertical: 10,
        }}

        onPress={handleLogin}
        titleStyle={{ color: colors.textOnPrimary, marginHorizontal: spaces.container, fontSize: fonts.sizes.h2,fontFamily: fonts.secondary.medium }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  logo: {
    marginBottom: 80
  },
  login_text: {
    borderLeftColor: colors.textOnPrimary,
    borderLeftWidth: 5,
    alignItems: 'left',
    color: colors.textOnPrimary,
    alignSelf: 'stretch',
    marginLeft: spaces.container,
    paddingHorizontal: 10,
    marginBottom: 10,
    
  },
  login_box: {
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    padding: spaces.container,
    margin: spaces.container
  },
  lb_title: {
    fontSize: fonts.sizes.h1,
    color: colors.textOnPrimary,
    fontFamily: fonts.secondary.medium
  },
  login_inputs: {
    borderColor: colors.textOnPrimaryLow,
  }
});

const mapStateToProps = state => {
  return {
    data: state.app.data,
  }
}

const mapDispatchToProps = {
  fetchDataAll
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);