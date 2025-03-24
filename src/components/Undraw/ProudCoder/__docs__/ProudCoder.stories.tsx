import type { Meta, StoryObj } from "@storybook/react";
import ProudCoder from "../ProudCoder";

const meta: Meta<typeof ProudCoder> = { title: "unDraw/ProudCoder", component: ProudCoder };

export default meta;
type Story = StoryObj<typeof ProudCoder>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
