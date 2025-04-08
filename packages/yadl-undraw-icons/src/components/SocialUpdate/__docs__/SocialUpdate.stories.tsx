import type { Meta, StoryObj } from "@storybook/react";
import SocialUpdate from "../SocialUpdate";

const meta: Meta<typeof SocialUpdate> = { title: "unDraw/SocialUpdate", component: SocialUpdate };

export default meta;
type Story = StoryObj<typeof SocialUpdate>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
