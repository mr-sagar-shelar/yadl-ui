import type { Meta, StoryObj } from "@storybook/react";
import SkateboardingSkateboarding from "../SkateboardingSkateboarding";

const meta: Meta<typeof SkateboardingSkateboarding> = { title: "unDraw/SkateboardingSkateboarding", component: SkateboardingSkateboarding };

export default meta;
type Story = StoryObj<typeof SkateboardingSkateboarding>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
