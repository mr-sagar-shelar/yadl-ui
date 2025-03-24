import type { Meta, StoryObj } from "@storybook/react";
import SocialGrowth from "../SocialGrowth";

const meta: Meta<typeof SocialGrowth> = { title: "unDraw/SocialGrowth", component: SocialGrowth };

export default meta;
type Story = StoryObj<typeof SocialGrowth>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
