import type { Meta, StoryObj } from "@storybook/react";
import MigrationEvaluator from "../MigrationEvaluator";

const meta: Meta<typeof MigrationEvaluator> = { title: "AWS/MigrationTransfer/MigrationEvaluator", component: MigrationEvaluator };

export default meta;
type Story = StoryObj<typeof MigrationEvaluator>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
