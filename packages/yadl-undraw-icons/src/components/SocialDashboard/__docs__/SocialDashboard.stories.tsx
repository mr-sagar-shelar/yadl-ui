import type { Meta, StoryObj } from "@storybook/react";
import SocialDashboard from "../SocialDashboard";

const meta: Meta<typeof SocialDashboard> = { title: "unDraw/SocialDashboard", component: SocialDashboard };

export default meta;
type Story = StoryObj<typeof SocialDashboard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
