import type { Meta, StoryObj } from "@storybook/react";
import GoingUp from "../GoingUp";

const meta: Meta<typeof GoingUp> = { title: "unDraw/GoingUp", component: GoingUp };

export default meta;
type Story = StoryObj<typeof GoingUp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
