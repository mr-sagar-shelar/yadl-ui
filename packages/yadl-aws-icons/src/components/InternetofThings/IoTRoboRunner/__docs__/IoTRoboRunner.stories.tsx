import type { Meta, StoryObj } from "@storybook/react";
import IoTRoboRunner from "../IoTRoboRunner";

const meta: Meta<typeof IoTRoboRunner> = { title: "AWS/InternetofThings/IoTRoboRunner", component: IoTRoboRunner };

export default meta;
type Story = StoryObj<typeof IoTRoboRunner>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
