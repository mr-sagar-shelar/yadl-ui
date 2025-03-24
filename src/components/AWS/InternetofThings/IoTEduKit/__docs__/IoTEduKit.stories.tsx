import type { Meta, StoryObj } from "@storybook/react";
import IoTEduKit from "../IoTEduKit";

const meta: Meta<typeof IoTEduKit> = { title: "AWS/InternetofThings/IoTEduKit", component: IoTEduKit };

export default meta;
type Story = StoryObj<typeof IoTEduKit>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
