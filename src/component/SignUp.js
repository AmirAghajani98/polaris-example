/** @format */

import {
  FormLayout,
  TextField,
  AppProvider,
  Card,
  Button,
} from '@shopify/polaris';
import { ToolBar } from './ToolBar';
export function SignUp() {
  return (
    <AppProvider i18n={undefined}>
      <ToolBar />
      <Card>
        <FormLayout>
          <h2>SignUp</h2>
          <TextField label='user name' onChange={() => {}} autoComplete='off' />
          <TextField type='password' label='password' onChange={() => {}} />
          <Button>Submit</Button>
        </FormLayout>
      </Card>
    </AppProvider>
  );
}
