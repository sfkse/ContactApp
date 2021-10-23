import Form from "./components/Form";
import Contact from "./components/Contact";
import { Grid } from "semantic-ui-react"
import { useState } from "react";
import { addContact, editContact } from './auth/firebase';

function App() {
  const initialValues = { id: '', name: '', phone: '', gender: '' }
  const [info, setInfo] = useState(initialValues);
  const [changeButton, setChangeButton] = useState(false)

  const handleSubmit = () => {

    const { id, name, phone, gender } = info

    if (id) {
      editContact(id, name, phone, gender)
      setChangeButton(false)
    }

    else {
      addContact(name, phone, gender)

    }
    setInfo(initialValues)
  }

  const handleEdit = (contact) => {
    const { id, name, phone, gender } = contact;
    setInfo({ id, name, phone, gender })
    setChangeButton(true)
  }

  return (
    <Grid centered style={{ marginTop: "20vh" }}>
      <Form
        info={info}
        changeButton={changeButton}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
      />
      <Contact handleEdit={handleEdit} />
    </Grid>
  );
}

export default App;
