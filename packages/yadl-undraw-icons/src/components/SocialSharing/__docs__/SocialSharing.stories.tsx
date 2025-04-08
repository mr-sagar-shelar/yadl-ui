import type { Meta, StoryObj } from "@storybook/react";
import SocialSharing from "../SocialSharing";

const meta: Meta<typeof SocialSharing> = { title: "unDraw/SocialSharing", component: SocialSharing };

export default meta;
type Story = StoryObj<typeof SocialSharing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
