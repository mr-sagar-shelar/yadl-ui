import type { Meta, StoryObj } from "@storybook/react";
import MobileProfile from "../MobileProfile";

const meta: Meta<typeof MobileProfile> = { title: "unDraw/MobileProfile", component: MobileProfile };

export default meta;
type Story = StoryObj<typeof MobileProfile>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
