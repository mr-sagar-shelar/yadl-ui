import type { Meta, StoryObj } from "@storybook/react";
import Reminder from "../Reminder";

const meta: Meta<typeof Reminder> = { title: "unDraw/Reminder", component: Reminder };

export default meta;
type Story = StoryObj<typeof Reminder>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
