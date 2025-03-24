import type { Meta, StoryObj } from "@storybook/react";
import MigrateForAnthos from "../MigrateForAnthos";

const meta: Meta<typeof MigrateForAnthos> = { title: "GCP/MigrateForAnthos", component: MigrateForAnthos };

export default meta;
type Story = StoryObj<typeof MigrateForAnthos>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
