# react-icons-animated

Collection of animated icons to use in React apps.

## Get Started

Follow these simple steps:

### 1. Install the npm package

You can also install it via yarn.

```sh
npm i react-icons-animated
```

### 2. Create button and hookup icon

The libary is built with TypeScript, intellisense shows available icons.

```ts
import { BurgerClose as Icon } from "react-icons-animated";

import { useState } from "react";

export const App = () => {
  const [isClosed, setIsClosed] = useState<boolean>(false);

  return (
    <button
      onClick={() => setIsClosed(!isClosed)}
      style={{
        width: "50px",
        height: "50px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Icon isClosed={isClosed} />
    </button>
  );
};
```

## Props

Icons components can implement an "isClosed" prop that is controlled by a parent component. You'll see [in the examples](https://icons.frontendjoe.com/) which components accept this prop.

| Name     | Type    | Default |
| -------- | ------- | ------- |
| isClosed | boolean | false   |

[You can find all of the examples here](https://icons.frontendjoe.com/)

## Licence

The MIT License (MIT)

Copyright (c) 2022 @frontendjoe

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributions

I'm currently looking for contributors to help out with this project. Lookout for contribution instructions in the coming weeks, or send me a message on [Instagram](https://instagram.com/frontendjoe/) to register interest.
