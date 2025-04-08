import type { Meta, StoryObj } from "@storybook/react";
import Professor from "../Professor";

const meta: Meta<typeof Professor> = { title: "unDraw/Professor", component: Professor };

export default meta;
type Story = StoryObj<typeof Professor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
