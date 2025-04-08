import type { Meta, StoryObj } from "@storybook/react";
import Reading from "../Reading";

const meta: Meta<typeof Reading> = { title: "unDraw/Reading", component: Reading };

export default meta;
type Story = StoryObj<typeof Reading>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
