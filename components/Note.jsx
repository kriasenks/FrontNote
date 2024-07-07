import React, { useState } from "react";
import {
  Card, CardBody, CardFooter, CardHeader,
  Divider, Heading, Text, IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import moment from "moment/moment";

export default function Note({ title, description, createdAt }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card variant={"filled"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      position="relative">
      {isHovered && (
        <IconButton
          icon={<CloseIcon />}
          size="sm"
          position="absolute"
          top="8px"
          right="8px"
          // onClick={onDelete}
          aria-label="Delete Note"
        />
      )}
      <CardHeader>
        <Heading size={"md"}>{title}</Heading>
      </CardHeader>
      <Divider borderColor={"gray"} />
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <Divider borderColor={"gray"} />
      <CardFooter>{moment(createdAt).format("DD/MM/YYYY h:mm:ss")}</CardFooter>
    </Card>
  );
}

