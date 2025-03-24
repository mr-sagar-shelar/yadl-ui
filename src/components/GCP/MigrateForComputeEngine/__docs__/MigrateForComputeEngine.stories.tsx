import type { Meta, StoryObj } from "@storybook/react";
import MigrateForComputeEngine from "../MigrateForComputeEngine";

const meta: Meta<typeof MigrateForComputeEngine> = { title: "GCP/MigrateForComputeEngine", component: MigrateForComputeEngine };

export default meta;
type Story = StoryObj<typeof MigrateForComputeEngine>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
