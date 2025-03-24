import type { Meta, StoryObj } from "@storybook/react";
import Filestore from "../Filestore";

const meta: Meta<typeof Filestore> = { title: "GCP/Filestore", component: Filestore };

export default meta;
type Story = StoryObj<typeof Filestore>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
