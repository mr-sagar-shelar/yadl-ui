import type { Meta, StoryObj } from "@storybook/react";
import Counter from "../Counter";

const meta: Meta<typeof Counter> = { title: "Azure/General/Counter", component: Counter };

export default meta;
type Story = StoryObj<typeof Counter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
