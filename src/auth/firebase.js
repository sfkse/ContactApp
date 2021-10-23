import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, onValue } from "firebase/database";


const firebaseConfig = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    appId: process.env.REACT_APP_APP_ID
});


export const addContact = (name, phone, gender) => {

    // Get a database reference to our blog
    const db = getDatabase();
    const contactRef = ref(db, 'contact');;
    const newContact = push(contactRef);
    set(newContact, {
        name: name,
        phone: phone,
        gender: gender
    })

}

export const useFetch = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [contactList, setContactList] = useState()
    useEffect(() => {
        const db = getDatabase();
        const contactRef = ref(db, 'contact');
        onValue(contactRef, (snapshot) => {
            const data = snapshot.val();

            const contactArray = [];
            for (let id in data) {
                contactArray.push({ id, ...data[id] })
            }
            setContactList(contactArray)
        });
    }, [])

    return { contactList }
}