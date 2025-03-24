import type { Meta, StoryObj } from "@storybook/react";
import Setup from "../Setup";

const meta: Meta<typeof Setup> = { title: "unDraw/Setup", component: Setup };

export default meta;
type Story = StoryObj<typeof Setup>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
