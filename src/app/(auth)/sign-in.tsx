import { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { ScreenWrapper } from '@/src/components/ui/screen-wrapper'
import HeaderWrapper from '@/src/components/header-wrapper'
import { H2 } from '@/src/components/ui/elements'
import { useTheme } from '@/src/features/theme/theme-hooks'

export default function SignInScreen() {
  const router = useRouter()
  const { theme: { text } } = useTheme()

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
          <Text style={[styles.label, { color: text }]}>Email</Text>
          <TextInput
            style={[styles.input, { color: text, borderColor: text }]}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: text }]}>Password</Text>
          <TextInput
            style={[styles.input, { color: text, borderColor: text }]}
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
          <Text style={[styles.linkText, { color: text }]}>
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