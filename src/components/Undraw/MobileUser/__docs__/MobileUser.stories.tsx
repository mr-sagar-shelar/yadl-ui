import type { Meta, StoryObj } from "@storybook/react";
import MobileUser from "../MobileUser";

const meta: Meta<typeof MobileUser> = { title: "unDraw/MobileUser", component: MobileUser };

export default meta;
type Story = StoryObj<typeof MobileUser>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
