import type { Meta, StoryObj } from "@storybook/react";
import SiteStats from "../SiteStats";

const meta: Meta<typeof SiteStats> = { title: "unDraw/SiteStats", component: SiteStats };

export default meta;
type Story = StoryObj<typeof SiteStats>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
