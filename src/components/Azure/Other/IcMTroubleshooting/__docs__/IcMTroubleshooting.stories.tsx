import type { Meta, StoryObj } from "@storybook/react";
import IcMTroubleshooting from "../IcMTroubleshooting";

const meta: Meta<typeof IcMTroubleshooting> = { title: "Azure/Other/IcMTroubleshooting", component: IcMTroubleshooting };

export default meta;
type Story = StoryObj<typeof IcMTroubleshooting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
