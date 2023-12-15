import { expect, test } from '@playwright/experimental-ct-react';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Input', () => {
  test('should be able to type text and have text as value', async ({
    mount,
  }) => {
    const TEST_STRING = 'Ein Apache in der Patsche!';
    const component = await mount(<input type="text" value={TEST_STRING} />);
    await expect(component).toHaveValue(TEST_STRING);
  });
});