import type { Meta, StoryObj } from "@storybook/react";
import WanderingMind from "../WanderingMind";

const meta: Meta<typeof WanderingMind> = { title: "unDraw/WanderingMind", component: WanderingMind };

export default meta;
type Story = StoryObj<typeof WanderingMind>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
