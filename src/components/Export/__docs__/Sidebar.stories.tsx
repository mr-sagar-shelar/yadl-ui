import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "../Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Export/Sidebar",
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {
  args: {
    width: 300,
    height: 500,
  },
};
