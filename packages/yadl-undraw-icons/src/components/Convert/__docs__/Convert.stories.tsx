import type { Meta, StoryObj } from "@storybook/react";
import Convert from "../Convert";

const meta: Meta<typeof Convert> = { title: "unDraw/Convert", component: Convert };

export default meta;
type Story = StoryObj<typeof Convert>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
