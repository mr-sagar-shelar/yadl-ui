import type { Meta, StoryObj } from "@storybook/react";
import RomanticGetaway from "../RomanticGetaway";

const meta: Meta<typeof RomanticGetaway> = { title: "unDraw/RomanticGetaway", component: RomanticGetaway };

export default meta;
type Story = StoryObj<typeof RomanticGetaway>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
