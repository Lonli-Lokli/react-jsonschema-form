import { DescriptionFieldProps, FormContextType, RJSFSchema, StrictRJSFSchema } from '@lonli-lokli/dynamic-forms-utils';
import { RichDescription } from '@lonli-lokli/dynamic-forms-core';

/** The `DescriptionField` is the template to use to render the description of a field
 *
 * @param props - The `DescriptionFieldProps` for this component
 */
export default function DescriptionField<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({ id, description, registry, uiSchema }: DescriptionFieldProps<T, S, F>) {
  if (!description) {
    return null;
  }

  return (
    <div>
      <div id={id} className='text-sm text-muted-foreground'>
        <RichDescription description={description} registry={registry} uiSchema={uiSchema} />
      </div>
    </div>
  );
}
