import type { Meta, StoryObj } from "@storybook/react";
import Winners from "../Winners";

const meta: Meta<typeof Winners> = { title: "unDraw/Winners", component: Winners };

export default meta;
type Story = StoryObj<typeof Winners>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
