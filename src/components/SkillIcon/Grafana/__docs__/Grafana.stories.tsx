import type { Meta, StoryObj } from "@storybook/react";
import Grafana from "../Grafana";

const meta: Meta<typeof Grafana> = { title: "SkillIcon/Grafana", component: Grafana };

export default meta;
type Story = StoryObj<typeof Grafana>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
