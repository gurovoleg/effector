import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import styled from 'styled-components';

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = styled(PopoverPrimitive.Content)`
  background: red;
  color: white;
  padding: 10px;
`

const user = {
  name: 'Oleg Gurov'
};

const User = ({ data }) => <h3>{data.name}</h3>

const RenderData = (props) => {
  return props.render();
}

const DataProvider = (props) => {
  const user = { name: 'Test User' };

  return props.children({ user })
}


const RadixUi = (props) => {
  return (
    <div>
      <h1>Radix UI</h1>

      <Popover>
        <PopoverTrigger>PopOver trigger</PopoverTrigger>
        <PopoverContent>
          <div>Popover content</div>
        </PopoverContent>
      </Popover>

      <RenderData render={() => <User data={user} />}/>

      <DataProvider>
        {({ user }) => <User data={user} />}
      </DataProvider>

    </div>
  );
}

export default RadixUi;
