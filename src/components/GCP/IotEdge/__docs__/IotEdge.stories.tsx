import type { Meta, StoryObj } from "@storybook/react";
import IotEdge from "../IotEdge";

const meta: Meta<typeof IotEdge> = { title: "GCP/IotEdge", component: IotEdge };

export default meta;
type Story = StoryObj<typeof IotEdge>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
