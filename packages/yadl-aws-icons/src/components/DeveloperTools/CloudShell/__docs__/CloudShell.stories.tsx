import type { Meta, StoryObj } from "@storybook/react";
import CloudShell from "../CloudShell";

const meta: Meta<typeof CloudShell> = { title: "AWS/DeveloperTools/CloudShell", component: CloudShell };

export default meta;
type Story = StoryObj<typeof CloudShell>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
