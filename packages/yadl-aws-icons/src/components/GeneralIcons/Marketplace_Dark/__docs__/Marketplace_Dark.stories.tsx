import type { Meta, StoryObj } from "@storybook/react";
import Marketplace_Dark from "../Marketplace_Dark";

const meta: Meta<typeof Marketplace_Dark> = { title: "AWS/GeneralIcons/Marketplace_Dark", component: Marketplace_Dark };

export default meta;
type Story = StoryObj<typeof Marketplace_Dark>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
