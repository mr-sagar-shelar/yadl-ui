import type { Meta, StoryObj } from "@storybook/react";
import EatingTogether from "../EatingTogether";

const meta: Meta<typeof EatingTogether> = { title: "unDraw/EatingTogether", component: EatingTogether };

export default meta;
type Story = StoryObj<typeof EatingTogether>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
