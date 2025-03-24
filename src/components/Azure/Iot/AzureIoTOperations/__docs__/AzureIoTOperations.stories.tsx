import type { Meta, StoryObj } from "@storybook/react";
import AzureIoTOperations from "../AzureIoTOperations";

const meta: Meta<typeof AzureIoTOperations> = { title: "Azure/Iot/AzureIoTOperations", component: AzureIoTOperations };

export default meta;
type Story = StoryObj<typeof AzureIoTOperations>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
