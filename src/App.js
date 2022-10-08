import React, { useState, useRef } from 'react';
import './App.css';

import { maleNames, femaleNames, nbNames, lastNames, desc1, species, charJob } from "./helpers/arrays";
import { wordPicker } from './helpers/wordPicker';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';


import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDlyuCM5wTtP2_5PPSCbluqM119CjIpUJg",
  authDomain: "simplenpc-7d5f4.firebaseapp.com",
  projectId: "simplenpc-7d5f4",
  storageBucket: "simplenpc-7d5f4.appspot.com",
  messagingSenderId: "1061276116146",
  appId: "1:1061276116146:web:4ee84a2eab6d5cd76a15ab",
  measurementId: "G-57YR4FLDNZ"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>simpleNPC</h1>
      </header>
      <section>
        {user ? <SignOut /> : <SignIn />}
        <p>{wordPicker(maleNames, 1)} {wordPicker(lastNames, 1)} is a {wordPicker(desc1, 1)} {wordPicker(species, 1)} {wordPicker(charJob, 1)}.</p>
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button className="sign-in" onClick={signInWithGoogle}>SIGN IN</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>SIGN OUT</button>
  )
}

function ChatRoom() {

  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (event) => {
    event.preventDefault();
    const { uid } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid
    })

    setFormValue('');

    dummy.current.scrollIntoView({ behavior: 'smooth' })

  }

  return (
    <>
      <main>
        {messages && messages.map(message => <ChatMessage key={message.id} message={message} />)}

        <div ref={dummy}></div>
        <section>
          <h2>Firestore Stuff</h2>
          <ul id="thingsList"></ul>
          <button id="createThing">Create a Thing</button>
        </section>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(event) => setFormValue(event.target.value)} />
        <button type="submit">SEND</button>
      </form>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`} >
      <p>{text}</p>
    </div>
  )
}

export default App;
