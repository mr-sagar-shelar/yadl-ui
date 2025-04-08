import type { Meta, StoryObj } from "@storybook/react";
import UserPreferences from "../UserPreferences";

const meta: Meta<typeof UserPreferences> = { title: "GCP/UserPreferences", component: UserPreferences };

export default meta;
type Story = StoryObj<typeof UserPreferences>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
