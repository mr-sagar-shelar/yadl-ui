import type { Meta, StoryObj } from "@storybook/react";
import PositiveAttitude from "../PositiveAttitude";

const meta: Meta<typeof PositiveAttitude> = { title: "unDraw/PositiveAttitude", component: PositiveAttitude };

export default meta;
type Story = StoryObj<typeof PositiveAttitude>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
