import type { Meta, StoryObj } from "@storybook/react";
import SetupWizard from "../SetupWizard";

const meta: Meta<typeof SetupWizard> = { title: "unDraw/SetupWizard", component: SetupWizard };

export default meta;
type Story = StoryObj<typeof SetupWizard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
