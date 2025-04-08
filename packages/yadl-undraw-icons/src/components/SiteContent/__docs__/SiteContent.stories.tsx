import type { Meta, StoryObj } from "@storybook/react";
import SiteContent from "../SiteContent";

const meta: Meta<typeof SiteContent> = { title: "unDraw/SiteContent", component: SiteContent };

export default meta;
type Story = StoryObj<typeof SiteContent>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
