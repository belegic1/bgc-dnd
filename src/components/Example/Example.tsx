import React, { useState } from "react";
import DragArea from "../DragArea/DragArea";
import DragItem from "../DragItem/DragItem";
import users from "./users.json";
import User from "../../types/User/User";
import Data from "../../types/Data/Data";

type UserProps = {
  name?: string;
  email?: string;
};

function UserItem({ name, email }: UserProps) {
  return (
    <li>
      <span>{name}</span>
      <span>{email}</span>
    </li>
  );
}

function Example() {
  const [exampleUsers, setExampleUsers] = useState<User[] | Data[]>(users);
  return (
    <DragArea
      //   classes={{
      // width: '300px',
      //   }}
      items={exampleUsers}
      onChange={setExampleUsers}
    >
      {exampleUsers.map((user, index) => (
        <DragItem
          // classes={{
          //   backgroundColor: "red"
          // }}
          key={user.id}
          note={index}
        >
          <UserItem name={user.firstName} email={user.email} />
        </DragItem>
      ))}
    </DragArea>
  );
}

export default Example;
