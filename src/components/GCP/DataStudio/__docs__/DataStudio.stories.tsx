import type { Meta, StoryObj } from "@storybook/react";
import DataStudio from "../DataStudio";

const meta: Meta<typeof DataStudio> = { title: "GCP/DataStudio", component: DataStudio };

export default meta;
type Story = StoryObj<typeof DataStudio>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
