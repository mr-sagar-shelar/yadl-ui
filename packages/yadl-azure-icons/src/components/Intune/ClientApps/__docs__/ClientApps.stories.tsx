import type { Meta, StoryObj } from "@storybook/react";
import ClientApps from "../ClientApps";

const meta: Meta<typeof ClientApps> = { title: "Azure/Intune/ClientApps", component: ClientApps };

export default meta;
type Story = StoryObj<typeof ClientApps>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
