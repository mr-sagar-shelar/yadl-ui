import type { Meta, StoryObj } from "@storybook/react";
import SocialStrategy from "../SocialStrategy";

const meta: Meta<typeof SocialStrategy> = { title: "unDraw/SocialStrategy", component: SocialStrategy };

export default meta;
type Story = StoryObj<typeof SocialStrategy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
