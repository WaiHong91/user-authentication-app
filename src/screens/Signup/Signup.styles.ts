import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  scrollContainer: { 
    flexGrow: 1, 
    justifyContent: 'center', 
    padding: 20 
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 10
  },
  subtitle: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 30 
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1,
    borderColor: '#ddd', 
    borderRadius: 8, 
    paddingHorizontal: 15,
    marginBottom: 15, 
    height: 50, 
    backgroundColor: '#f9f9f9',
  },
  inputIcon: { 
    marginRight: 10 
  },
  input: { 
    flex: 1, 
    color: '#333' 
  },
  errorText: { 
    color: 'red', 
    marginBottom: 15 
  },
  button: {
    backgroundColor: '#34C759',
    padding: 15, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 10,
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16
  },
  footer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 20 
  },
  footerText: { 
    color: '#666' 
  },
  linkText: { 
    color: '#34C759', 
    fontWeight: 'bold' 
  },
});