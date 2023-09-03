import type { Meta, StoryObj } from '@storybook/react';

import { MyLabel } from '../components/MyLabel';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/Example/MyLabel',
  component: MyLabel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    allCaps: { control: 'boolean' },
    size: { control: 'inline-radio' },
    color: { control: 'inline-radio' },
    fontColor: { control: 'color' },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Basic Label'
    },
}

export const AllCaps: Story = {
    args: {
        label: 'All Caps Label',
        allCaps: true, 
    },
};

export const Secondary: Story = {
    args: {       
        label: 'Secondary Label',
        color: 'text-secondary',
    },
};

export const CustomColor: Story = {
    args: {
        label: 'Custom Color Label',
        color: 'text-secondary',
    },
};

export const CustomFontColor: Story = {
    args: {
        label: 'Custom Color Label',
        fontColor: 'blue',
    },
};

export const Large: Story = {
    args: {
        size: 'h1',
        label: 'Basic Label',
    },
};

export const Medium: Story = {
    args: {
        size: 'h2',
        label: 'Basic Label',
    },
};

export const Small: Story = {
    args: {
        size: 'h3',
        label: 'Basic Label',
    },
};
