import type { Meta, StoryObj } from "@storybook/react";
import PowerUp from "../PowerUp";

const meta: Meta<typeof PowerUp> = { title: "Azure/General/PowerUp", component: PowerUp };

export default meta;
type Story = StoryObj<typeof PowerUp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
