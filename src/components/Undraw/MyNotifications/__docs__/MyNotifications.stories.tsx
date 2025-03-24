import type { Meta, StoryObj } from "@storybook/react";
import MyNotifications from "../MyNotifications";

const meta: Meta<typeof MyNotifications> = { title: "unDraw/MyNotifications", component: MyNotifications };

export default meta;
type Story = StoryObj<typeof MyNotifications>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
