import type { Meta, StoryObj } from "@storybook/react";
import Update from "../Update";

const meta: Meta<typeof Update> = { title: "unDraw/Update", component: Update };

export default meta;
type Story = StoryObj<typeof Update>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
