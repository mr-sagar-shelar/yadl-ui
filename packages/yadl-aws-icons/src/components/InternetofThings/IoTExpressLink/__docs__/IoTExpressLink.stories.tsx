import type { Meta, StoryObj } from "@storybook/react";
import IoTExpressLink from "../IoTExpressLink";

const meta: Meta<typeof IoTExpressLink> = { title: "AWS/InternetofThings/IoTExpressLink", component: IoTExpressLink };

export default meta;
type Story = StoryObj<typeof IoTExpressLink>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
