import type { Meta, StoryObj } from "@storybook/react";
import Mobile_prototypingMobilePrototyping from "../Mobile_prototypingMobilePrototyping";

const meta: Meta<typeof Mobile_prototypingMobilePrototyping> = { title: "unDraw/Mobile_prototypingMobilePrototyping", component: Mobile_prototypingMobilePrototyping };

export default meta;
type Story = StoryObj<typeof Mobile_prototypingMobilePrototyping>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
