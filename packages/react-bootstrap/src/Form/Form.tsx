import { ComponentType } from 'react';

import { withTheme, FormProps } from '@lonli-lokli/dynamic-forms-core';
import { generateTheme } from '../Theme';
import { FormContextType, RJSFSchema, StrictRJSFSchema } from '@lonli-lokli/dynamic-forms-utils';

export function generateForm<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(): ComponentType<FormProps<T, S, F>> {
  return withTheme<T, S, F>(generateTheme<T, S, F>());
}

export default generateForm();
