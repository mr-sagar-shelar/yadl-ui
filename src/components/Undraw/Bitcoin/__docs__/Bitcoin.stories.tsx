import type { Meta, StoryObj } from "@storybook/react";
import Bitcoin from "../Bitcoin";

const meta: Meta<typeof Bitcoin> = { title: "unDraw/Bitcoin", component: Bitcoin };

export default meta;
type Story = StoryObj<typeof Bitcoin>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
