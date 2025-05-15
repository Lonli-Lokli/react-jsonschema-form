import { ThemeProps } from '@lonli-lokli/dynamic-forms-core';
import { FormContextType, RJSFSchema, StrictRJSFSchema } from '@lonli-lokli/dynamic-forms-utils';

import { generateTemplates } from '../Templates';
import { generateWidgets } from '../Widgets';

export function generateTheme<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(): ThemeProps<T, S, F> {
  return {
    templates: generateTemplates<T, S, F>(),
    widgets: generateWidgets<T, S, F>(),
  };
}

export default generateTheme();
