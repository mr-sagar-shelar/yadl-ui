import type { Meta, StoryObj } from "@storybook/react";
import IceLandingZone from "../IceLandingZone";

const meta: Meta<typeof IceLandingZone> = { title: "Azure/NewIcons/IceLandingZone", component: IceLandingZone };

export default meta;
type Story = StoryObj<typeof IceLandingZone>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
