import type { Meta, StoryObj } from "@storybook/react";
import Empty from "../Empty";

const meta: Meta<typeof Empty> = { title: "unDraw/Empty", component: Empty };

export default meta;
type Story = StoryObj<typeof Empty>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
