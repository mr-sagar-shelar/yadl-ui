import type { Meta, StoryObj } from "@storybook/react";
import CommunityImages from "../CommunityImages";

const meta: Meta<typeof CommunityImages> = { title: "Azure/Other/CommunityImages", component: CommunityImages };

export default meta;
type Story = StoryObj<typeof CommunityImages>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
