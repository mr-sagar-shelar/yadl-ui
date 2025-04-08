import type { Meta, StoryObj } from "@storybook/react";
import Keys from "../Keys";

const meta: Meta<typeof Keys> = { title: "Azure/Menu/Keys", component: Keys };

export default meta;
type Story = StoryObj<typeof Keys>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
