import type { Meta, StoryObj } from "@storybook/react";
import Composition from "../Composition";

const meta: Meta<typeof Composition> = { title: "unDraw/Composition", component: Composition };

export default meta;
type Story = StoryObj<typeof Composition>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
