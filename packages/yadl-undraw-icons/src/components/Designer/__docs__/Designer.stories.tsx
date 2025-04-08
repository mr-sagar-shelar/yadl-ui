import type { Meta, StoryObj } from "@storybook/react";
import Designer from "../Designer";

const meta: Meta<typeof Designer> = { title: "unDraw/Designer", component: Designer };

export default meta;
type Story = StoryObj<typeof Designer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
