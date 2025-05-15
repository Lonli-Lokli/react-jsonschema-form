import { useCallback } from 'react';
import Form, { IChangeEvent } from '@lonli-lokli/dynamic-forms-core';
import { RJSFSchema, UiSchema, ValidatorType } from '@lonli-lokli/dynamic-forms-utils';
import localValidator from '@lonli-lokli/dynamic-forms-validator-ajv8';

interface ValidatorSelectorProps {
  validator: string;
  validators: { [validatorName: string]: ValidatorType };
  select: (validator: string) => void;
}

export default function ValidatorSelector({ validator, validators, select }: ValidatorSelectorProps) {
  const schema: RJSFSchema = {
    type: 'string',
    title: 'Validator',
    enum: Object.keys(validators),
  };

  const uiSchema: UiSchema = {
    'ui:placeholder': 'Select validator',
  };

  const onChange = useCallback(
    ({ formData }: IChangeEvent) => {
      if (formData) {
        select(formData);
      }
    },
    [select],
  );

  return (
    <Form
      className='form_rjsf_validatorSelector'
      idPrefix='rjsf_validatorSelector'
      schema={schema}
      uiSchema={uiSchema}
      formData={validator}
      validator={localValidator}
      onChange={onChange}
    >
      <div />
    </Form>
  );
}
