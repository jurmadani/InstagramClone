# Instagram Clone

<img src="/ReadmeAssets/Cover2.png" align="left">

This project is an Instagram clone developed using React Native and TypeScript. It includes features such as user authentication, post sharing, account editing, user search, following/unfollowing other users, and liking/commenting on posts. The project also utilizes Redux for global state management and Firebase for backend services, including Firebase Storage for storing media files, Firestore for the database, and Firebase Authentication for user authentication.

## 🔗 Developer

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/daniel-jurma/)



## Features

- User Authentication: User Authentication: Secure login with email via firebase auth system
- Post Sharing: Share photos from device gallery.
- Account Management: Edit profile information and update profile picture.
- User Search: Discover and connect with other users.
- Follow/Unfollow Users: Stay updated with followed users' posts.
- Like/Comment on Posts: Interact with posts through likes and comments.
- UI Design: Modern UI with Ui Kitten, React Native Elements, and React Native Paper.
- State Management: Efficient state management with Redux.

## Technologies Used

<img src="/ReadmeAssets/rn.png"
width="200" hspace="10" vspace="10">
<img src="/ReadmeAssets/typescript.png"
width="200" hspace="10" vspace="10">
<img src="/ReadmeAssets/redux.png"
width="200" hspace="10" vspace="10">
<img src="/ReadmeAssets/git.png"
width="200" hspace="10" vspace="10">
<img src="/ReadmeAssets/npm.png"
width="200" hspace="10" vspace="10">
<img src="/ReadmeAssets/firebase.png"
width="200" hspace="10" vspace="10">
<img src="/ReadmeAssets/vscode.png"
width="200" hspace="10" vspace="10">
<img src="/ReadmeAssets/figma.png"
width="200" hspace="10" vspace="10">


- **React Native**: Popular open-source JavaScript framework for cross-platform mobile app development.
- **Typescript**: Superset of JavaScript with optional static typing for improved code quality and tooling.
- **Redux**: Predictable state container for managing application state in JavaScript apps.
- **Git**: Version control system for tracking code changes and facilitating collaboration.
- **npm**: JavaScript package manager for easy dependency management.
- **Firebase**: A comprehensive backend-as-a-service (BaaS) platform provided by Google.
- **Visual Studio Code**: Popular code editor with rich features for code editing and debugging.
- **Figma**: Web-based design tool for creating UI/UX designs and prototypes.



## Configuration

Before running the application, you need to configure Firebase services. Follow the steps below:

Create a Firebase project at https://firebase.google.com if you haven't already.
- Enable Firebase Authentication, Firestore, and Firebase Storage for your project.
- Obtain the Firebase configuration object from the Firebase console.
- Update the Firebase configuration in the project code.
- Create a file firebase.ts and replace the following lines with your Firebase configuration:

```bash
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage"
import "firebase/compat/database"

const firebaseConfig = {
 //your config goes here
};

if (!firebase.apps.length) {
  const app = firebase.initializeApp(firebaseConfig);

}

export { firebase };

```
    

## Deployment

To deploy this project run

```bash
  npx expo start 
```


## Screnshots

<img src="/ReadmeAssets/ss15.jpg"
width="200" hspace="10" vspace="10">
<img src="/ReadmeAssets/ss1.jpg"
width="200" hspace="10" vspace="10">
<img src="/ReadmeAssets/ss12.jpg"
width="200" hspace="10" vspace="10">
<img src="/ReadmeAssets/ss3.jpg"
width="200" hspace="10" vspace="10">
<img src="/ReadmeAssets/ss5.jpg"
width="200" hspace="10" vspace="10">
<img src="/ReadmeAssets/ss7.jpg"
width="200" hspace="10" vspace="10">
<img src="/ReadmeAssets/ss10.jpg"
width="200" hspace="10" vspace="10">
<img src="/ReadmeAssets/ss14.jpg"
width="200" hspace="10" vspace="10">

## UI Libraries

- **<a href="https://akveo.github.io/react-native-ui-kitten/" target="_blank">UI Kitten</a>**: A customizable UI library for React Native that provides various UI components.
- **<a href="https://reactnativeelements.com/" target="_blank">React Native Elements</a>**: A set of cross-platform UI components for React Native applications.
- **<a href="https://callstack.github.io/react-native-paper/" target="_blank">React Native Paper</a>**:  A material design implementation for React Native, providing UI components and theming options.

## Contributing
If you would like to contribute to the Instagram Clone, you are welcome to submit pull requests or open issues on the GitHub repository. Please make sure to follow the project's coding conventions and commit guidelines. We appreciate your contributions and feedback!

## License
The Instagram Clone is open-source and released under the [GNU General Public License](https://choosealicense.com/licenses/gpl-3.0/)

## Contact
For any inquiries or questions regarding the Instagram Clone application, please contact Jurma Daniel at d_jurma@yahoo.com





    
