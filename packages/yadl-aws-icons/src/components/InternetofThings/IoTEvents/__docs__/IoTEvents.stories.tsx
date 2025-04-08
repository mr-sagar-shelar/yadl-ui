import type { Meta, StoryObj } from "@storybook/react";
import IoTEvents from "../IoTEvents";

const meta: Meta<typeof IoTEvents> = { title: "AWS/InternetofThings/IoTEvents", component: IoTEvents };

export default meta;
type Story = StoryObj<typeof IoTEvents>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
