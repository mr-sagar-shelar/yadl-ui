import type { Meta, StoryObj } from "@storybook/react";
import Checklist from "../Checklist";

const meta: Meta<typeof Checklist> = { title: "unDraw/Checklist", component: Checklist };

export default meta;
type Story = StoryObj<typeof Checklist>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
