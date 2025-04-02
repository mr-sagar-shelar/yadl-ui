import type { Meta, StoryObj } from "@storybook/react";
import DirectConnect from "../DirectConnect";

const meta: Meta<typeof DirectConnect> = { title: "AWS/NetworkingContentDelivery/DirectConnect", component: DirectConnect };

export default meta;
type Story = StoryObj<typeof DirectConnect>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
