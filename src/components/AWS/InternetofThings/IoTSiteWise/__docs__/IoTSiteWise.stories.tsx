import type { Meta, StoryObj } from "@storybook/react";
import IoTSiteWise from "../IoTSiteWise";

const meta: Meta<typeof IoTSiteWise> = { title: "AWS/InternetofThings/IoTSiteWise", component: IoTSiteWise };

export default meta;
type Story = StoryObj<typeof IoTSiteWise>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
