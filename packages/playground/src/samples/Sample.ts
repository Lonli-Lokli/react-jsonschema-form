import { UiSchema } from '@lonli-lokli/dynamic-forms-utils';
import { FormProps } from '@lonli-lokli/dynamic-forms-core';

export type UiSchemaForTheme = (theme: string) => UiSchema;

export interface Sample extends Omit<FormProps, 'validator' | 'uiSchema'> {
  uiSchema?: FormProps['uiSchema'] | UiSchemaForTheme;
}
