import type { Meta, StoryObj } from "@storybook/react";
import AzureCommunicationServices from "../AzureCommunicationServices";

const meta: Meta<typeof AzureCommunicationServices> = { title: "Azure/Other/AzureCommunicationServices", component: AzureCommunicationServices };

export default meta;
type Story = StoryObj<typeof AzureCommunicationServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
