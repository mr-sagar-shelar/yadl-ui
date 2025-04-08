import type { Meta, StoryObj } from "@storybook/react";
import Outpostsfamily from "../Outpostsfamily";

const meta: Meta<typeof Outpostsfamily> = { title: "AWS/Compute/Outpostsfamily", component: Outpostsfamily };

export default meta;
type Story = StoryObj<typeof Outpostsfamily>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
