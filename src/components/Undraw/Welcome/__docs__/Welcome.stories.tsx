import type { Meta, StoryObj } from "@storybook/react";
import Welcome from "../Welcome";

const meta: Meta<typeof Welcome> = { title: "unDraw/Welcome", component: Welcome };

export default meta;
type Story = StoryObj<typeof Welcome>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
