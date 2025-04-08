import type { Meta, StoryObj } from "@storybook/react";
import IoTThingsGraph from "../IoTThingsGraph";

const meta: Meta<typeof IoTThingsGraph> = { title: "AWS/InternetofThings/IoTThingsGraph", component: IoTThingsGraph };

export default meta;
type Story = StoryObj<typeof IoTThingsGraph>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
