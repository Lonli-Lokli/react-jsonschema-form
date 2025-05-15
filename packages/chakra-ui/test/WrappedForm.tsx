import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { FormProps } from '@lonli-lokli/dynamic-forms-core';

import Form from '../src';

export default function WrappedForm(props: FormProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Form {...props} />
    </ChakraProvider>
  );
}
