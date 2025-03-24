import type { Meta, StoryObj } from "@storybook/react";
import WithLove from "../WithLove";

const meta: Meta<typeof WithLove> = { title: "unDraw/WithLove", component: WithLove };

export default meta;
type Story = StoryObj<typeof WithLove>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
