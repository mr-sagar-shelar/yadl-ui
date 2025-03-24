import type { Meta, StoryObj } from "@storybook/react";
import Halloween from "../Halloween";

const meta: Meta<typeof Halloween> = { title: "unDraw/Halloween", component: Halloween };

export default meta;
type Story = StoryObj<typeof Halloween>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
