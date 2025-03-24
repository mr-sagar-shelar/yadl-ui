import type { Meta, StoryObj } from "@storybook/react";
import Dataflow from "../Dataflow";

const meta: Meta<typeof Dataflow> = { title: "GCP/Dataflow", component: Dataflow };

export default meta;
type Story = StoryObj<typeof Dataflow>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
