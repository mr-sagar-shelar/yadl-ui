import type { Meta, StoryObj } from "@storybook/react";
import SocialInteraction from "../SocialInteraction";

const meta: Meta<typeof SocialInteraction> = { title: "unDraw/SocialInteraction", component: SocialInteraction };

export default meta;
type Story = StoryObj<typeof SocialInteraction>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
