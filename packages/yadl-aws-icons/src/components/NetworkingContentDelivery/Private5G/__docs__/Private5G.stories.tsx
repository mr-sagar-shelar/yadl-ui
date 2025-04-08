import type { Meta, StoryObj } from "@storybook/react";
import Private5G from "../Private5G";

const meta: Meta<typeof Private5G> = { title: "AWS/NetworkingContentDelivery/Private5G", component: Private5G };

export default meta;
type Story = StoryObj<typeof Private5G>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
