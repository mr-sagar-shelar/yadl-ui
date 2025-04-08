import type { Meta, StoryObj } from "@storybook/react";
import AppInstallation from "../AppInstallation";

const meta: Meta<typeof AppInstallation> = { title: "unDraw/AppInstallation", component: AppInstallation };

export default meta;
type Story = StoryObj<typeof AppInstallation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
