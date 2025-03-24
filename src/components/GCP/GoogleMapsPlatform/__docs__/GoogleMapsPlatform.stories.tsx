import type { Meta, StoryObj } from "@storybook/react";
import GoogleMapsPlatform from "../GoogleMapsPlatform";

const meta: Meta<typeof GoogleMapsPlatform> = { title: "GCP/GoogleMapsPlatform", component: GoogleMapsPlatform };

export default meta;
type Story = StoryObj<typeof GoogleMapsPlatform>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
