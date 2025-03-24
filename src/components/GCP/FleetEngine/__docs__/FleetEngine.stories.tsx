import type { Meta, StoryObj } from "@storybook/react";
import FleetEngine from "../FleetEngine";

const meta: Meta<typeof FleetEngine> = { title: "GCP/FleetEngine", component: FleetEngine };

export default meta;
type Story = StoryObj<typeof FleetEngine>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
