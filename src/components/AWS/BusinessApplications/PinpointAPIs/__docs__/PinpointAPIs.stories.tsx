import type { Meta, StoryObj } from "@storybook/react";
import PinpointAPIs from "../PinpointAPIs";

const meta: Meta<typeof PinpointAPIs> = { title: "AWS/BusinessApplications/PinpointAPIs", component: PinpointAPIs };

export default meta;
type Story = StoryObj<typeof PinpointAPIs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
