import type { Meta, StoryObj } from "@storybook/react";
import SocialNetworking from "../SocialNetworking";

const meta: Meta<typeof SocialNetworking> = { title: "unDraw/SocialNetworking", component: SocialNetworking };

export default meta;
type Story = StoryObj<typeof SocialNetworking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
