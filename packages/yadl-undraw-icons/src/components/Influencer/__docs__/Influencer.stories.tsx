import type { Meta, StoryObj } from "@storybook/react";
import Influencer from "../Influencer";

const meta: Meta<typeof Influencer> = { title: "unDraw/Influencer", component: Influencer };

export default meta;
type Story = StoryObj<typeof Influencer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
