// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
// import PopularJobs from '../components/PopularJobs';
// import FeaturedJobs from '../components/FeaturedJobs';

// const Home = ({ user }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (text) => {
//     setSearchQuery(text);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.profileContainer}>
//           <View>
//             <Text style={styles.name}>{user.name}</Text>
//             <Text style={styles.email}>{user.email}</Text>
//           </View>
//         </View>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search a job or position"
//           value={searchQuery}
//           onChangeText={handleSearch}
//         />
//       </View>
//       <FeaturedJobs searchQuery={searchQuery} />
//       <PopularJobs searchQuery={searchQuery} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#fff',
//     flex: 1,
//   },
//   header: {
//     paddingBottom: 20,
//   },
//   profileContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     marginRight: 10,
//   },
//   profilePicture: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginLeft: 20,
//   },
//   name: {
//     fontSize: 24,
//     color: '#2c3e50',
//     fontWeight: 'bold',
//     marginLeft: 20 ,
//   },
//   email: {
//     fontSize: 16,
//     color: '#7f8c8d',
//     marginLeft: 20,
//   },
//   searchInput: {
//     padding: 10,
//     borderRadius: 5,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     marginTop: 20,
//   },
// });

// export default Home;

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import PopularJobs from '../components/PopularJobs';
import FeaturedJobs from '../components/FeaturedJobs';

const HomeScreen = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FeaturedJobs searchQuery={searchQuery} />
      <PopularJobs searchQuery={searchQuery} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    paddingBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginRight: 10,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 20,
  },
  name: {
    fontSize: 24,
    color: '#2c3e50',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  email: {
    fontSize: 16,
    color: '#7f8c8d',
    marginLeft: 20,
  },
  searchInput: {
    padding: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    marginTop: 20,
  },
});

export default HomeScreen;

