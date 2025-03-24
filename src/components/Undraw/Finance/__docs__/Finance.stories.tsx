import type { Meta, StoryObj } from "@storybook/react";
import Finance from "../Finance";

const meta: Meta<typeof Finance> = { title: "unDraw/Finance", component: Finance };

export default meta;
type Story = StoryObj<typeof Finance>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
