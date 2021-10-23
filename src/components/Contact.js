import { useEffect } from 'react';
import { Grid, Header, Icon, Segment, Table } from 'semantic-ui-react';
import { useFetch } from '../auth/firebase';
const Contact = () => {
    const { contactList, setContactList } = useFetch()
    console.log(contactList)
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
                            contactList.map(contact =>
                                <Table.Row>
                                    <Table.Cell>John Lilki</Table.Cell>
                                    <Table.Cell>9625415599</Table.Cell>
                                    <Table.Cell>MALE</Table.Cell>
                                    <Table.Cell><Icon className="ui red" link name='close' /></Table.Cell>
                                    <Table.Cell><Icon className="ui green" link name='edit' /></Table.Cell>
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
