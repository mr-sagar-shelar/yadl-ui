import type { Meta, StoryObj } from "@storybook/react";
import Fiji from "../Fiji";

const meta: Meta<typeof Fiji> = { title: "Azure/Other/Fiji", component: Fiji };

export default meta;
type Story = StoryObj<typeof Fiji>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
