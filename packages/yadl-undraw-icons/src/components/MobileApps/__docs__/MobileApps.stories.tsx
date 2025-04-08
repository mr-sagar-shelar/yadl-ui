import type { Meta, StoryObj } from "@storybook/react";
import MobileApps from "../MobileApps";

const meta: Meta<typeof MobileApps> = { title: "unDraw/MobileApps", component: MobileApps };

export default meta;
type Story = StoryObj<typeof MobileApps>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
