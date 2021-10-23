import { useRef } from 'react'
import { Grid, Segment, Form, Input, Button, Dropdown } from 'semantic-ui-react';


const FormComponent = ({ info, setInfo, handleSubmit }) => {
    const ref = useRef()
    const gender = [
        {
            key: 1,
            text: 'Male',
            value: 'Male',
        },
        {
            key: 2,
            text: 'Female',
            value: 'Female',
        }
    ];


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInfo({ ...info, [name]: value })
    }

    const handleOptionChange = (e, result) => {
        const { name, value } = result;
        setInfo({ ...info, [name]: value })
    }
    return (

        <Grid.Column width={3}>
            <Segment raised>
                <Form onSubmit={handleSubmit} >
                    <Form.Field>
                        <Input
                            ref={ref}
                            icon="user"
                            name="name"
                            iconPosition="left"
                            placeholder="Name"
                            value={info.name}
                            onChange={handleInputChange} />
                    </Form.Field>
                    <Form.Field>
                        <Input
                            ref={ref}
                            icon="phone"
                            name="phone"
                            iconPosition="left"
                            placeholder="Phone Number"
                            value={info.phone}
                            onChange={handleInputChange} />
                    </Form.Field>
                    <Form.Field>
                        <Dropdown
                            ref={ref}
                            name="gender"
                            placeholder='Gender'
                            fluid
                            selection
                            options={gender}
                            value={info.gender}
                            onChange={handleOptionChange}
                        />
                    </Form.Field>
                    <Button primary fluid >Add</Button>
                </Form>
            </Segment>
        </Grid.Column>

    )
}

export default FormComponent
