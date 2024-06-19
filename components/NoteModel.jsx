import { Card, CardHeader, Heading, Divider, CardBody, Text, CardFooter } from '@chakra-ui/react'
import moment from 'moment'

export default function NoteModel( {title, description, createdAt} ) {

    return ( 
        <Card variant={"filled"}>
              <CardHeader>
                <Heading size="md">{title}</Heading>
              </CardHeader>
              <Divider borderColor={"gray"}></Divider>
              <CardBody>
                <Text>{description}</Text>
              </CardBody>
              <Divider borderColor={"gray"}></Divider>
              <CardFooter>{moment(createdAt).format("DD/MM/YYYY h:mm:ss")}</CardFooter>
        </Card>
    )
}

