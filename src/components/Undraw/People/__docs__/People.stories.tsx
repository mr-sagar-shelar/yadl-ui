import type { Meta, StoryObj } from "@storybook/react";
import People from "../People";

const meta: Meta<typeof People> = { title: "unDraw/People", component: People };

export default meta;
type Story = StoryObj<typeof People>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
