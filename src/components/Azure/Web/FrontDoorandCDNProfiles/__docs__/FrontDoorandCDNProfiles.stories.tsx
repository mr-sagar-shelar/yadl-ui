import type { Meta, StoryObj } from "@storybook/react";
import FrontDoorandCDNProfiles from "../FrontDoorandCDNProfiles";

const meta: Meta<typeof FrontDoorandCDNProfiles> = { title: "Azure/Web/FrontDoorandCDNProfiles", component: FrontDoorandCDNProfiles };

export default meta;
type Story = StoryObj<typeof FrontDoorandCDNProfiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
