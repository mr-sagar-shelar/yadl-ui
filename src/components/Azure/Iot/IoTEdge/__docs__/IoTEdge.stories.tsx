import type { Meta, StoryObj } from "@storybook/react";
import IoTEdge from "../IoTEdge";

const meta: Meta<typeof IoTEdge> = { title: "Azure/Iot/IoTEdge", component: IoTEdge };

export default meta;
type Story = StoryObj<typeof IoTEdge>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
