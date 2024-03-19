import type { Meta, StoryObj } from '@storybook/angular';
import { KeyboardComponent } from '../public-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<KeyboardComponent> = {
  title: 'Keyboard',
  component: KeyboardComponent,
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default meta;
type Story = StoryObj<KeyboardComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    layout: 'default',
  },
};

export const Secondary: Story = {
  args: {
    layout: 'numpad',
  },
};
