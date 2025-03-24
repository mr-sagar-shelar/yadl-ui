import type { Meta, StoryObj } from "@storybook/react";
import IoTTwinMaker from "../IoTTwinMaker";

const meta: Meta<typeof IoTTwinMaker> = { title: "AWS/InternetofThings/IoTTwinMaker", component: IoTTwinMaker };

export default meta;
type Story = StoryObj<typeof IoTTwinMaker>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
