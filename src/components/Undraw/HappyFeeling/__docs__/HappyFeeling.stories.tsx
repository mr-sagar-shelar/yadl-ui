import type { Meta, StoryObj } from "@storybook/react";
import HappyFeeling from "../HappyFeeling";

const meta: Meta<typeof HappyFeeling> = { title: "unDraw/HappyFeeling", component: HappyFeeling };

export default meta;
type Story = StoryObj<typeof HappyFeeling>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
