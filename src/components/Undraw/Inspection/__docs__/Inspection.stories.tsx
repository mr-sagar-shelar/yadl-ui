import type { Meta, StoryObj } from "@storybook/react";
import Inspection from "../Inspection";

const meta: Meta<typeof Inspection> = { title: "unDraw/Inspection", component: Inspection };

export default meta;
type Story = StoryObj<typeof Inspection>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
