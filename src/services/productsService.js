import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

import { getFirestore } from "firebase/firestore";
import app from "../firebase/config";

const db = getFirestore(app);

const productsRef = collection(db, "products");

export const getProducts = async () => {
  const snapshot = await getDocs(productsRef);

  const products = snapshot.docs.map((document) => {
    return {
      id: document.id,
      ...document.data()
    };
  });

  return products;
};

export const getProductById = async (id) => {
  const productRef = doc(db, "products", id);

  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    throw new Error("Producto no encontrado");
  }

  return {
    id: snapshot.id,
    ...snapshot.data()
  };
};

export const createProduct = async (product) => {
  const response = await addDoc(productsRef, product);

  return response.id;
};

export const updateProduct = async (id, product) => {
  const productRef = doc(db, "products", id);

  await updateDoc(productRef, product);
};

export const deleteProduct = async (id) => {
  const productRef = doc(db, "products", id);

  await deleteDoc(productRef);
};