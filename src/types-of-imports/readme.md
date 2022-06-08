# Regular

```js
import { func } from "./src/multiple-exports.js";

func();
```

# Aliased All

```js
import * as MyAlias from "./src/multiple-exports.js";

MyAlias.func();
```

# Aliased Single Import

```js
import {func as aliasedFunc} as MyAlias from "./src/multiple-exports.js";

aliasedFunc();
```
