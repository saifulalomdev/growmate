import { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { ScreenWrapper } from '@/src/components/ui/screen-wrapper'
import HeaderWrapper from '@/src/components/header-wrapper'
import { H2 } from '@/src/components/ui/elements'

export default function SignInScreen() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    // Add Better Auth sign in logic here
  }

  return (
    <ScreenWrapper>
      <HeaderWrapper>
        <H2>Sign In</H2>
      </HeaderWrapper>

      <View style={styles.container}>
        <View style={styles.inputGroup}>
          <Text style={[styles.label]}>Email</Text>
          <TextInput
            style={[styles.input]}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={[styles.label]}>Password</Text>
          <TextInput
            style={[styles.input]}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkContainer} 
          onPress={() => router.push('/(auth)/sign-up')}
        >
          <Text style={[styles.linkText]}>
            Don't have an account? <Text style={styles.boldText}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    gap: 16,
  },
  inputGroup: {
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: '#007AFF',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  linkContainer: {
    alignItems: 'center',
    marginTop: 12,
  },
  linkText: {
    fontSize: 14,
  },
  boldText: {
    fontWeight: 'bold',
  },
})