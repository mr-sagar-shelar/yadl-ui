import type { Meta, StoryObj } from "@storybook/react";
import LocalSsd from "../LocalSsd";

const meta: Meta<typeof LocalSsd> = { title: "GCP/LocalSsd", component: LocalSsd };

export default meta;
type Story = StoryObj<typeof LocalSsd>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
