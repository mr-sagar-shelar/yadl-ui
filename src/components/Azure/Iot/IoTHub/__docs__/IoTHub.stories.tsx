import type { Meta, StoryObj } from "@storybook/react";
import IoTHub from "../IoTHub";

const meta: Meta<typeof IoTHub> = { title: "Azure/Iot/IoTHub", component: IoTHub };

export default meta;
type Story = StoryObj<typeof IoTHub>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
