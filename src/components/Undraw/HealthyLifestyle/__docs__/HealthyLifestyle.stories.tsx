import type { Meta, StoryObj } from "@storybook/react";
import HealthyLifestyle from "../HealthyLifestyle";

const meta: Meta<typeof HealthyLifestyle> = { title: "unDraw/HealthyLifestyle", component: HealthyLifestyle };

export default meta;
type Story = StoryObj<typeof HealthyLifestyle>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
