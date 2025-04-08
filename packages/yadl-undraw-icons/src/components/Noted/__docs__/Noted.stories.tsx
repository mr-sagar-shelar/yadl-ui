import type { Meta, StoryObj } from "@storybook/react";
import Noted from "../Noted";

const meta: Meta<typeof Noted> = { title: "unDraw/Noted", component: Noted };

export default meta;
type Story = StoryObj<typeof Noted>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
