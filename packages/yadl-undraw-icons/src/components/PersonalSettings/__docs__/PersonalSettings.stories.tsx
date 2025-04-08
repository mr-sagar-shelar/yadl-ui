import type { Meta, StoryObj } from "@storybook/react";
import PersonalSettings from "../PersonalSettings";

const meta: Meta<typeof PersonalSettings> = { title: "unDraw/PersonalSettings", component: PersonalSettings };

export default meta;
type Story = StoryObj<typeof PersonalSettings>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
