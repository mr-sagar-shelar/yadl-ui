import type { Meta, StoryObj } from "@storybook/react";
import SocialExpert from "../SocialExpert";

const meta: Meta<typeof SocialExpert> = { title: "unDraw/SocialExpert", component: SocialExpert };

export default meta;
type Story = StoryObj<typeof SocialExpert>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
