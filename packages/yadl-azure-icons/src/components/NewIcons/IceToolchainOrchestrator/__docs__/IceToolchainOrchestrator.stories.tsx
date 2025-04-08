import type { Meta, StoryObj } from "@storybook/react";
import IceToolchainOrchestrator from "../IceToolchainOrchestrator";

const meta: Meta<typeof IceToolchainOrchestrator> = { title: "Azure/NewIcons/IceToolchainOrchestrator", component: IceToolchainOrchestrator };

export default meta;
type Story = StoryObj<typeof IceToolchainOrchestrator>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
