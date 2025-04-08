import type { Meta, StoryObj } from "@storybook/react";
import MobileInterface from "../MobileInterface";

const meta: Meta<typeof MobileInterface> = { title: "unDraw/MobileInterface", component: MobileInterface };

export default meta;
type Story = StoryObj<typeof MobileInterface>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
