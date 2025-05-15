import renderer from 'react-test-renderer';
import validator from '@lonli-lokli/dynamic-forms-validator-ajv8';
import { RJSFSchema } from '@lonli-lokli/dynamic-forms-utils';
import { formTests } from '@lonli-lokli/dynamic-forms-snapshot-tests';

import '../__mocks__/matchMedia.mock';
import Form from '../src';
import { FORM_RENDER_OPTIONS } from './snapshotConstants';

formTests(Form, FORM_RENDER_OPTIONS);

describe('antd specific tests', () => {
  test('descriptionLocation tooltip in formContext', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: {
        'my-field': {
          type: 'string',
          description: 'some description',
        },
      },
    };
    const formContext = { descriptionLocation: 'tooltip' };
    const tree = renderer.create(<Form schema={schema} validator={validator} formContext={formContext} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
