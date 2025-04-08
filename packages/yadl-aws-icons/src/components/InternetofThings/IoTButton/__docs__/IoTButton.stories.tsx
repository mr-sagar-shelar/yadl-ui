import type { Meta, StoryObj } from "@storybook/react";
import IoTButton from "../IoTButton";

const meta: Meta<typeof IoTButton> = { title: "AWS/InternetofThings/IoTButton", component: IoTButton };

export default meta;
type Story = StoryObj<typeof IoTButton>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
