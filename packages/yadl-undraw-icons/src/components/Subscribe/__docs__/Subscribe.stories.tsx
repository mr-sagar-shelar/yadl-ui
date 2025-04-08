import type { Meta, StoryObj } from "@storybook/react";
import Subscribe from "../Subscribe";

const meta: Meta<typeof Subscribe> = { title: "unDraw/Subscribe", component: Subscribe };

export default meta;
type Story = StoryObj<typeof Subscribe>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
