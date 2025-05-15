import { ComponentType } from 'react';

import { FormProps, withTheme } from '@lonli-lokli/dynamic-forms-core';
import { FormContextType, RJSFSchema, StrictRJSFSchema } from '@lonli-lokli/dynamic-forms-utils';

import { generateTheme } from '../Theme';

export function generateForm<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(): ComponentType<FormProps<T, S, F>> {
  return withTheme<T, S, F>(generateTheme<T, S, F>());
}

export default generateForm();
