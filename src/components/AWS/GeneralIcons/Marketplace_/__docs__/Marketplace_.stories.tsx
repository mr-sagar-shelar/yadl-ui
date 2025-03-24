import type { Meta, StoryObj } from "@storybook/react";
import Marketplace_ from "../Marketplace_";

const meta: Meta<typeof Marketplace_> = { title: "AWS/GeneralIcons/Marketplace_", component: Marketplace_ };

export default meta;
type Story = StoryObj<typeof Marketplace_>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
