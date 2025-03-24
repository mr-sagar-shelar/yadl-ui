import type { Meta, StoryObj } from "@storybook/react";
import Create from "../Create";

const meta: Meta<typeof Create> = { title: "unDraw/Create", component: Create };

export default meta;
type Story = StoryObj<typeof Create>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
