import type { Meta, StoryObj } from "@storybook/react";
import Sumerian from "../Sumerian";

const meta: Meta<typeof Sumerian> = { title: "AWS/VRAR/Sumerian", component: Sumerian };

export default meta;
type Story = StoryObj<typeof Sumerian>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
