import type { Meta, StoryObj } from "@storybook/react";
import Loading from "../Loading";

const meta: Meta<typeof Loading> = { title: "unDraw/Loading", component: Loading };

export default meta;
type Story = StoryObj<typeof Loading>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
