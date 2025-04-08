import type { Meta, StoryObj } from "@storybook/react";
import SocialSerenity from "../SocialSerenity";

const meta: Meta<typeof SocialSerenity> = { title: "unDraw/SocialSerenity", component: SocialSerenity };

export default meta;
type Story = StoryObj<typeof SocialSerenity>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
