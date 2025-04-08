import type { Meta, StoryObj } from "@storybook/react";
import Sync from "../Sync";

const meta: Meta<typeof Sync> = { title: "unDraw/Sync", component: Sync };

export default meta;
type Story = StoryObj<typeof Sync>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
