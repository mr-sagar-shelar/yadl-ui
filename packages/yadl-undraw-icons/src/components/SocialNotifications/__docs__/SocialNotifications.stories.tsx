import type { Meta, StoryObj } from "@storybook/react";
import SocialNotifications from "../SocialNotifications";

const meta: Meta<typeof SocialNotifications> = { title: "unDraw/SocialNotifications", component: SocialNotifications };

export default meta;
type Story = StoryObj<typeof SocialNotifications>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
