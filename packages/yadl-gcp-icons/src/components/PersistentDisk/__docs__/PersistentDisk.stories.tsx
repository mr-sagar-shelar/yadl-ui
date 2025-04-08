import type { Meta, StoryObj } from "@storybook/react";
import PersistentDisk from "../PersistentDisk";

const meta: Meta<typeof PersistentDisk> = { title: "GCP/PersistentDisk", component: PersistentDisk };

export default meta;
type Story = StoryObj<typeof PersistentDisk>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
