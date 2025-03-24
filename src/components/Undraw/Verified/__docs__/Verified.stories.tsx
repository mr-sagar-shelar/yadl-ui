import type { Meta, StoryObj } from "@storybook/react";
import Verified from "../Verified";

const meta: Meta<typeof Verified> = { title: "unDraw/Verified", component: Verified };

export default meta;
type Story = StoryObj<typeof Verified>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
