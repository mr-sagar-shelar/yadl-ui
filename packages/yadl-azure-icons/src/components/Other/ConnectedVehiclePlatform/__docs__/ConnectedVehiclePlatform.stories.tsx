import type { Meta, StoryObj } from "@storybook/react";
import ConnectedVehiclePlatform from "../ConnectedVehiclePlatform";

const meta: Meta<typeof ConnectedVehiclePlatform> = { title: "Azure/Other/ConnectedVehiclePlatform", component: ConnectedVehiclePlatform };

export default meta;
type Story = StoryObj<typeof ConnectedVehiclePlatform>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
