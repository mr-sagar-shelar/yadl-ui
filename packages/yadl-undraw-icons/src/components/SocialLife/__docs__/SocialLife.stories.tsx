import type { Meta, StoryObj } from "@storybook/react";
import SocialLife from "../SocialLife";

const meta: Meta<typeof SocialLife> = { title: "unDraw/SocialLife", component: SocialLife };

export default meta;
type Story = StoryObj<typeof SocialLife>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
