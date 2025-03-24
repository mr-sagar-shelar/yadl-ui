import type { Meta, StoryObj } from "@storybook/react";
import DataPipeline from "../DataPipeline";

const meta: Meta<typeof DataPipeline> = { title: "AWS/Analytics/DataPipeline", component: DataPipeline };

export default meta;
type Story = StoryObj<typeof DataPipeline>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
