import type { Meta, StoryObj } from "@storybook/react";
import RouteFilters from "../RouteFilters";

const meta: Meta<typeof RouteFilters> = { title: "Azure/Networking/RouteFilters", component: RouteFilters };

export default meta;
type Story = StoryObj<typeof RouteFilters>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
