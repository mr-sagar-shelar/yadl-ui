import type { Meta, StoryObj } from "@storybook/react";
import HomeSettings from "../HomeSettings";

const meta: Meta<typeof HomeSettings> = { title: "unDraw/HomeSettings", component: HomeSettings };

export default meta;
type Story = StoryObj<typeof HomeSettings>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
