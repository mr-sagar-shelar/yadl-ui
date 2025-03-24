import type { Meta, StoryObj } from "@storybook/react";
import Ideation from "../Ideation";

const meta: Meta<typeof Ideation> = { title: "unDraw/Ideation", component: Ideation };

export default meta;
type Story = StoryObj<typeof Ideation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
