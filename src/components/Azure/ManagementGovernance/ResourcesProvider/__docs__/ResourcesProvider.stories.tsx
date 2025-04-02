import type { Meta, StoryObj } from "@storybook/react";
import ResourcesProvider from "../ResourcesProvider";

const meta: Meta<typeof ResourcesProvider> = { title: "Azure/ManagementGovernance/ResourcesProvider", component: ResourcesProvider };

export default meta;
type Story = StoryObj<typeof ResourcesProvider>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
