import type { Meta, StoryObj } from "@storybook/react";
import TrafficDirector from "../TrafficDirector";

const meta: Meta<typeof TrafficDirector> = { title: "GCP/TrafficDirector", component: TrafficDirector };

export default meta;
type Story = StoryObj<typeof TrafficDirector>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
