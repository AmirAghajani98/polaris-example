/** @format */

import {
  FormLayout,
  TextField,
  AppProvider,
  Card,
  Button,
} from '@shopify/polaris';
import { ToolBar } from './ToolBar';
export function SignIn() {
  return (
    <AppProvider i18n={undefined}>
      <ToolBar />
      <Card>
        <FormLayout>
          <h2>SignIn</h2>
          <TextField label='user name' onChange={() => {}} autoComplete='off' />
          <TextField type='password' label='password' onChange={() => {}} />
          <TextField
            type='password'
            label='confrim password'
            onChange={() => {}}
          />
          <Button>Submit</Button>
        </FormLayout>
      </Card>
    </AppProvider>
  );
}
