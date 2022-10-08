import React, { useState, useRef } from 'react';
import {faker } from '@faker-js/faker';
import './App.css';

import { maleNames, femaleNames, nbNames, lastNames, desc1, species, charJob } from "./helpers/arrays";
import { wordPicker } from './helpers/wordPicker';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';


import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { FacebookAuthProvider } from 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyDlyuCM5wTtP2_5PPSCbluqM119CjIpUJg",
  authDomain: "simplenpc-7d5f4.firebaseapp.com",
  projectId: "simplenpc-7d5f4",
  storageBucket: "simplenpc-7d5f4.appspot.com",
  messagingSenderId: "1061276116146",
  appId: "1:1061276116146:web:4ee84a2eab6d5cd76a15ab",
  measurementId: "G-57YR4FLDNZ"
})

const createThing = document.getElementById('createThing');
const thingsList = document.getElementById('thingsList');
const userDetails = document.getElementById('userDetails');

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

let thingsRef;
let unsubscribe;

auth.onAuthStateChanged(user => {

  if (user) {

    //db reference
    thingsRef = firestore.collection('things');
    // userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;

    createThing.onclick = () => {
      const { serverTimestamp } = firebase.firestore.FieldValue;

      thingsRef.add({
        uid: user.uid,
        name: faker.commerce.productName(),
        createdAt: serverTimestamp()
      });
    }

    // query
    unsubscribe = thingsRef.where('uid', '==', user.uid).onSnapshot(querySnapshot => {

        const items = querySnapshot.docs.map(doc => {
          return `<li>${doc.data().name}</li>`
        });

        thingsList.innerHTML = items.join('');

      })




  } else {
    unsubscribe && unsubscribe();
  }

});


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

          <h2>Firestore Stuff</h2>
          <ul id="thingsList"></ul>
          {/* <div id="userDetails"></div> */}
          <button id="createThing">Create a Thing</button>
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


export default App;
