import type { Meta, StoryObj } from "@storybook/react";
import Anthos from "../Anthos";

const meta: Meta<typeof Anthos> = { title: "GCP/Anthos", component: Anthos };

export default meta;
type Story = StoryObj<typeof Anthos>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
