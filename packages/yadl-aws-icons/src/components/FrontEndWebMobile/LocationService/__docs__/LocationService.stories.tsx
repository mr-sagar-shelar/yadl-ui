import type { Meta, StoryObj } from "@storybook/react";
import LocationService from "../LocationService";

const meta: Meta<typeof LocationService> = { title: "AWS/FrontEndWebMobile/LocationService", component: LocationService };

export default meta;
type Story = StoryObj<typeof LocationService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
