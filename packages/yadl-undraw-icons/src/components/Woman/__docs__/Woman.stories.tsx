import type { Meta, StoryObj } from "@storybook/react";
import Woman from "../Woman";

const meta: Meta<typeof Woman> = { title: "unDraw/Woman", component: Woman };

export default meta;
type Story = StoryObj<typeof Woman>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
