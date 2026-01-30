import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f5f5' 
  },
  content: { 
    flex: 1, 
    padding: 20, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  welcomeText: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    color: '#333' 
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 40,
  },
  label: { 
    fontSize: 14, 
    color: '#666', 
    marginTop: 10 
  },
  value: { 
    fontSize: 18, 
    color: '#333', 
    fontWeight: '500' 
  },
  divider: { 
    height: 1, 
    backgroundColor: '#eee', 
    marginVertical: 15 
  },
  logoutButton: {
    width: '100%',
    backgroundColor: '#FF0000', 
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
});