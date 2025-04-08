import type { Meta, StoryObj } from "@storybook/react";
import Reminders from "../Reminders";

const meta: Meta<typeof Reminders> = { title: "unDraw/Reminders", component: Reminders };

export default meta;
type Story = StoryObj<typeof Reminders>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
