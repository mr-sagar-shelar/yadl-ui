import type { Meta, StoryObj } from "@storybook/react";
import CapacityReservationGroups from "../CapacityReservationGroups";

const meta: Meta<typeof CapacityReservationGroups> = { title: "Azure/Other/CapacityReservationGroups", component: CapacityReservationGroups };

export default meta;
type Story = StoryObj<typeof CapacityReservationGroups>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
