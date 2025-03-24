import type { Meta, StoryObj } from "@storybook/react";
import NewNotifications from "../NewNotifications";

const meta: Meta<typeof NewNotifications> = { title: "unDraw/NewNotifications", component: NewNotifications };

export default meta;
type Story = StoryObj<typeof NewNotifications>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
