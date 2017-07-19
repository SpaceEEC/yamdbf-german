# yamdbf-german
YAMDBF plugin which adds a German localization.

# Installing
- Install the package via `npm` (requires `git` to be installed):
```
npm i -s SpaceEEC/yamdbf-german
```
- And then simply drop the string `'german'` in your plugins array of your YAMDBFOptions
```ts
import { Client } from 'yamdbf';

const client: Client = new Client({
	plugins: ['german'],
});
```
That's it, you now can change the language with the ``setLang`` command that the framework provides.