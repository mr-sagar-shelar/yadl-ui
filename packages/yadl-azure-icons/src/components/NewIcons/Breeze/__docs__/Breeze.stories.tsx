import type { Meta, StoryObj } from "@storybook/react";
import Breeze from "../Breeze";

const meta: Meta<typeof Breeze> = { title: "Azure/NewIcons/Breeze", component: Breeze };

export default meta;
type Story = StoryObj<typeof Breeze>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
