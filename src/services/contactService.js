import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp
} from "firebase/firestore";

import { getFirestore } from "firebase/firestore";
import app from "../firebase/config";

const db = getFirestore(app);

const contactsRef = collection(db, "contacts");

export const createContactMessage = async (message) => {
  const response = await addDoc(contactsRef, {
    ...message,
    createdAt: serverTimestamp()
  });

  return response.id;
};

export const getContactMessages = async () => {
  const snapshot = await getDocs(contactsRef);

  const messages = snapshot.docs.map((document) => {
    return {
      id: document.id,
      ...document.data()
    };
  });

  return messages;
};

export const deleteContactMessage = async (id) => {
  const messageRef = doc(db, "contacts", id);

  await deleteDoc(messageRef);
};