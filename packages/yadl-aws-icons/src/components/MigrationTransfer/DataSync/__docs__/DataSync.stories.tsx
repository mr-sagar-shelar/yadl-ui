import type { Meta, StoryObj } from "@storybook/react";
import DataSync from "../DataSync";

const meta: Meta<typeof DataSync> = { title: "AWS/MigrationTransfer/DataSync", component: DataSync };

export default meta;
type Story = StoryObj<typeof DataSync>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
