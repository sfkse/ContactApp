import Form from "./components/Form";
import Contact from "./components/Contact";
import { Grid } from "semantic-ui-react"
import { useState } from "react";
import { addContact } from './auth/firebase';

function App() {
  const initialValues = { name: '', phone: '', gender: 'Other' }
  const [info, setInfo] = useState(initialValues);

  const handleSubmit = () => {

    const { name, phone, gender } = info
    addContact(name, phone, gender)
    setInfo(initialValues)
  }



  return (
    <Grid centered style={{ marginTop: "20vh" }}>
      <Form
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}

      />
      <Contact />
    </Grid>
  );
}

export default App;
