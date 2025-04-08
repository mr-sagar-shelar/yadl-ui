import type { Meta, StoryObj } from "@storybook/react";
import Steps from "../Steps";

const meta: Meta<typeof Steps> = { title: "unDraw/Steps", component: Steps };

export default meta;
type Story = StoryObj<typeof Steps>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
