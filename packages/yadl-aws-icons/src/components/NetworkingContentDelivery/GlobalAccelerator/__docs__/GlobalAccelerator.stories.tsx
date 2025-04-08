import type { Meta, StoryObj } from "@storybook/react";
import GlobalAccelerator from "../GlobalAccelerator";

const meta: Meta<typeof GlobalAccelerator> = { title: "AWS/NetworkingContentDelivery/GlobalAccelerator", component: GlobalAccelerator };

export default meta;
type Story = StoryObj<typeof GlobalAccelerator>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
