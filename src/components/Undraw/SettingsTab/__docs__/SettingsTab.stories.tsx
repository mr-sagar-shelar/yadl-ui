import type { Meta, StoryObj } from "@storybook/react";
import SettingsTab from "../SettingsTab";

const meta: Meta<typeof SettingsTab> = { title: "unDraw/SettingsTab", component: SettingsTab };

export default meta;
type Story = StoryObj<typeof SettingsTab>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
