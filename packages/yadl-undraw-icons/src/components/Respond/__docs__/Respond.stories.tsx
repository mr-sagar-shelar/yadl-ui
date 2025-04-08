import type { Meta, StoryObj } from "@storybook/react";
import Respond from "../Respond";

const meta: Meta<typeof Respond> = { title: "unDraw/Respond", component: Respond };

export default meta;
type Story = StoryObj<typeof Respond>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
