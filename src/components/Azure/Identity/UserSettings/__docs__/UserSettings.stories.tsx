import type { Meta, StoryObj } from "@storybook/react";
import UserSettings from "../UserSettings";

const meta: Meta<typeof UserSettings> = { title: "Azure/Identity/UserSettings", component: UserSettings };

export default meta;
type Story = StoryObj<typeof UserSettings>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
