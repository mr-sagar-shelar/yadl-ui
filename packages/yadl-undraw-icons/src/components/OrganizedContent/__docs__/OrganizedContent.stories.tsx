import type { Meta, StoryObj } from "@storybook/react";
import OrganizedContent from "../OrganizedContent";

const meta: Meta<typeof OrganizedContent> = { title: "unDraw/OrganizedContent", component: OrganizedContent };

export default meta;
type Story = StoryObj<typeof OrganizedContent>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
