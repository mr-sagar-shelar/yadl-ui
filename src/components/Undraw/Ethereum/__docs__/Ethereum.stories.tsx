import type { Meta, StoryObj } from "@storybook/react";
import Ethereum from "../Ethereum";

const meta: Meta<typeof Ethereum> = { title: "unDraw/Ethereum", component: Ethereum };

export default meta;
type Story = StoryObj<typeof Ethereum>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
