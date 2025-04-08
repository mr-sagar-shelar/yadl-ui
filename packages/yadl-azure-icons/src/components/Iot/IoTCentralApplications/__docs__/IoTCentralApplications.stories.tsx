import type { Meta, StoryObj } from "@storybook/react";
import IoTCentralApplications from "../IoTCentralApplications";

const meta: Meta<typeof IoTCentralApplications> = { title: "Azure/Iot/IoTCentralApplications", component: IoTCentralApplications };

export default meta;
type Story = StoryObj<typeof IoTCentralApplications>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
