import type { Meta, StoryObj } from "@storybook/react";
import DeveloperActivity from "../DeveloperActivity";

const meta: Meta<typeof DeveloperActivity> = { title: "unDraw/DeveloperActivity", component: DeveloperActivity };

export default meta;
type Story = StoryObj<typeof DeveloperActivity>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
