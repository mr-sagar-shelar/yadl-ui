import type { Meta, StoryObj } from "@storybook/react";
import PassingBy from "../PassingBy";

const meta: Meta<typeof PassingBy> = { title: "unDraw/PassingBy", component: PassingBy };

export default meta;
type Story = StoryObj<typeof PassingBy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
