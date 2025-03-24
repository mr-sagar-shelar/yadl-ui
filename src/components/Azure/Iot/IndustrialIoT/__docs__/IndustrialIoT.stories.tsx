import type { Meta, StoryObj } from "@storybook/react";
import IndustrialIoT from "../IndustrialIoT";

const meta: Meta<typeof IndustrialIoT> = { title: "Azure/Iot/IndustrialIoT", component: IndustrialIoT };

export default meta;
type Story = StoryObj<typeof IndustrialIoT>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
