import type { Meta, StoryObj } from "@storybook/react";
import IoTGreengrass from "../IoTGreengrass";

const meta: Meta<typeof IoTGreengrass> = { title: "AWS/InternetofThings/IoTGreengrass", component: IoTGreengrass };

export default meta;
type Story = StoryObj<typeof IoTGreengrass>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
