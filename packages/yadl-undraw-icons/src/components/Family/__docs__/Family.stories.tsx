import type { Meta, StoryObj } from "@storybook/react";
import Family from "../Family";

const meta: Meta<typeof Family> = { title: "unDraw/Family", component: Family };

export default meta;
type Story = StoryObj<typeof Family>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
