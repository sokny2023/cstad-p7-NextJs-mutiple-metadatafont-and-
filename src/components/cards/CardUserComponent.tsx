import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { UserType } from "@/types/users";

export default function CardUserComponent({firstName,image}: UserType) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Hrello</p>
        <small className="text-default-500">bye</small>
        <h4 className="font-bold text-large">{firstName}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
