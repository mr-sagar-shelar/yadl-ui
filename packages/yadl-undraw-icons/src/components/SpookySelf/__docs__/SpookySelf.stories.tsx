import type { Meta, StoryObj } from "@storybook/react";
import SpookySelf from "../SpookySelf";

const meta: Meta<typeof SpookySelf> = { title: "unDraw/SpookySelf", component: SpookySelf };

export default meta;
type Story = StoryObj<typeof SpookySelf>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
