import type { Meta, StoryObj } from "@storybook/react";
import SocialMedia from "../SocialMedia";

const meta: Meta<typeof SocialMedia> = { title: "unDraw/SocialMedia", component: SocialMedia };

export default meta;
type Story = StoryObj<typeof SocialMedia>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
