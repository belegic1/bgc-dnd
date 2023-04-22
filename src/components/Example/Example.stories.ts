import type { Meta, StoryObj } from '@storybook/react';

import Example from "./Example"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Component/Page',
  component: Example,
  tags: ['autodocs'],
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Draggable: Story = {
  args: {},
};
