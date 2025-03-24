import type { Meta, StoryObj } from "@storybook/react";
import IoTCore from "../IoTCore";

const meta: Meta<typeof IoTCore> = { title: "AWS/InternetofThings/IoTCore", component: IoTCore };

export default meta;
type Story = StoryObj<typeof IoTCore>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
