import type { Meta, StoryObj } from "@storybook/react";
import SetPreferences from "../SetPreferences";

const meta: Meta<typeof SetPreferences> = { title: "unDraw/SetPreferences", component: SetPreferences };

export default meta;
type Story = StoryObj<typeof SetPreferences>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
