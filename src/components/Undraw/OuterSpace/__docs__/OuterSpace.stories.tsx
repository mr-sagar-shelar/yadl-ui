import type { Meta, StoryObj } from "@storybook/react";
import OuterSpace from "../OuterSpace";

const meta: Meta<typeof OuterSpace> = { title: "unDraw/OuterSpace", component: OuterSpace };

export default meta;
type Story = StoryObj<typeof OuterSpace>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
