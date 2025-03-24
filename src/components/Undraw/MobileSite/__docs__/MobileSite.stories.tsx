import type { Meta, StoryObj } from "@storybook/react";
import MobileSite from "../MobileSite";

const meta: Meta<typeof MobileSite> = { title: "unDraw/MobileSite", component: MobileSite };

export default meta;
type Story = StoryObj<typeof MobileSite>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
