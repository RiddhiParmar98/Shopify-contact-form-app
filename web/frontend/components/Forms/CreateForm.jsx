import { Button } from '@shopify/polaris'
import React from 'react'
import {useAppBridge} from '@shopify/app-bridge-react';
import {Fullscreen} from '@shopify/app-bridge/actions';

const CreateForm = () => {

  const app = useAppBridge();
  const fullscreen = Fullscreen.create(app);
  return (
    <>
    <div>Form</div>
    <Button primary onClick={()=>fullscreen.dispatch(Fullscreen.Action.EXIT)}>
    Create Form
  </Button>
  </>
  )
}

export default CreateForm