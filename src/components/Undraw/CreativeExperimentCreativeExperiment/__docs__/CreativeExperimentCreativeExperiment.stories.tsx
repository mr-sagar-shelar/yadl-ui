import type { Meta, StoryObj } from "@storybook/react";
import CreativeExperimentCreativeExperiment from "../CreativeExperimentCreativeExperiment";

const meta: Meta<typeof CreativeExperimentCreativeExperiment> = { title: "unDraw/CreativeExperimentCreativeExperiment", component: CreativeExperimentCreativeExperiment };

export default meta;
type Story = StoryObj<typeof CreativeExperimentCreativeExperiment>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
