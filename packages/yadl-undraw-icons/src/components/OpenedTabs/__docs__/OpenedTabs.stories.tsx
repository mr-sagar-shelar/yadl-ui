import type { Meta, StoryObj } from "@storybook/react";
import OpenedTabs from "../OpenedTabs";

const meta: Meta<typeof OpenedTabs> = { title: "unDraw/OpenedTabs", component: OpenedTabs };

export default meta;
type Story = StoryObj<typeof OpenedTabs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
