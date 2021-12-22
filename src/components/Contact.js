import { Grid, Header, Icon, Segment, Table } from 'semantic-ui-react';
import { deleteContact, useFetch } from '../auth/firebase';


const Contact = ({ handleEdit }) => {
    const { contactList } = useFetch()
    // console.log(contactList)


    return (

        <Grid.Column width={6}>
            <Segment textAlign="center">
                <Header size='large'>CONTACTS</Header>
            </Segment>
            <Segment>
                <Table basic="very" textAlign="center">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Username</Table.HeaderCell>
                            <Table.HeaderCell>Phone Number</Table.HeaderCell>
                            <Table.HeaderCell>Gender</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            contactList?.map(contact =>
                                <Table.Row key={contact.id} >
                                    <Table.Cell>{contact.name}</Table.Cell>
                                    <Table.Cell>{contact.phone}</Table.Cell>
                                    <Table.Cell>{contact.gender}</Table.Cell>
                                    <Table.Cell><Icon className="ui red" link name='close' onClick={() => deleteContact(contact.id)} /></Table.Cell>
                                    <Table.Cell><Icon className="ui green" link name='edit' onClick={() => handleEdit(contact)} /></Table.Cell>
                                </Table.Row>
                            )


                        }
                    </Table.Body>
                </Table>
            </Segment>
        </Grid.Column>

    )
}

export default Contact
