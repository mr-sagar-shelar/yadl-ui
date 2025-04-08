import type { Meta, StoryObj } from "@storybook/react";
import AdministrativeUnits from "../AdministrativeUnits";

const meta: Meta<typeof AdministrativeUnits> = { title: "Azure/Identity/AdministrativeUnits", component: AdministrativeUnits };

export default meta;
type Story = StoryObj<typeof AdministrativeUnits>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
