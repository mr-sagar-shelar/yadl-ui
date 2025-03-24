import type { Meta, StoryObj } from "@storybook/react";
import MobileEncryption from "../MobileEncryption";

const meta: Meta<typeof MobileEncryption> = { title: "unDraw/MobileEncryption", component: MobileEncryption };

export default meta;
type Story = StoryObj<typeof MobileEncryption>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
