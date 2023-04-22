## bgc-dnd
A simple react js drag and drop library with sorting functionality

## Instalation
```

yarn add bgc-dnd

npm install bgc-dnd

```

## Usage

```
import {useState} from "react;
import {DragArea,DragItem} from "bgc-dnd";


function Example() {
  const [exampleUsers, setExampleUsers] = useState(users);
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
``